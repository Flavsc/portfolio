import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

interface CursorInterface {
  delay: number;
  _x: number;
  _y: number;
  endX: number;
  endY: number;
  cursorVisible: boolean;
  cursorEnlarged: boolean;
  $dot: HTMLElement;
  $outline: HTMLElement;
  dotSize?: number;
  outlineSize?: number;
}

class Cursor implements CursorInterface {
  delay: number;
  _x: number;
  _y: number;
  endX: number;
  endY: number;
  cursorVisible: boolean;
  cursorEnlarged: boolean;
  $dot: HTMLElement;
  $outline: HTMLElement;
  dotSize?: number;
  outlineSize?: number;

  constructor() {
    this.delay = 8;
    this._x = 0;
    this._y = 0;
    this.endX = window.innerWidth / 2;
    this.endY = window.innerHeight / 2;
    this.cursorVisible = true;
    this.cursorEnlarged = false;

    const dot = document.querySelector(".cursor-dot");
    const outline = document.querySelector(".cursor-dot-outline");

    if (!dot || !outline) {
      throw new Error("Cursor elements not found");
    }

    this.$dot = dot as HTMLElement;
    this.$outline = outline as HTMLElement;
  }

  init(): void {
    // Set up element sizes
    this.dotSize = this.$dot.offsetWidth;
    this.outlineSize = this.$outline.offsetWidth;

    this.setupEventListeners();
    this.animateDotOutline();
  }

  setupEventListeners(): void {
    // Anchor hovering
    document.querySelectorAll("a").forEach((el: Element) => {
      el.addEventListener("mouseover", () => {
        this.cursorEnlarged = true;
        this.toggleCursorSize();
      });
      el.addEventListener("mouseout", () => {
        this.cursorEnlarged = false;
        this.toggleCursorSize();
      });
    });

    // Click events
    document.addEventListener("mousedown", () => {
      this.cursorEnlarged = true;
      this.toggleCursorSize();
    });
    document.addEventListener("mouseup", () => {
      this.cursorEnlarged = false;
      this.toggleCursorSize();
    });

    document.addEventListener("mousemove", (e: MouseEvent) => {
      // Show the cursor
      this.cursorVisible = true;
      this.toggleCursorVisibility();

      // Position the dot
      this.endX = e.pageX;
      this.endY = e.pageY;
      this.$dot.style.top = `${this.endY}px`;
      this.$dot.style.left = `${this.endX}px`;
    });

    // Hide/show cursor
    document.addEventListener("mouseenter", () => {
      this.cursorVisible = true;
      this.toggleCursorVisibility();
      this.$dot.style.opacity = "1";
      this.$outline.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
      this.cursorVisible = true;
      this.toggleCursorVisibility();
      this.$dot.style.opacity = "0";
      this.$outline.style.opacity = "0";
    });
  }

  animateDotOutline(): void {
    this._x += (this.endX - this._x) / this.delay;
    this._y += (this.endY - this._y) / this.delay;
    this.$outline.style.top = `${this._y}px`;
    this.$outline.style.left = `${this._x}px`;

    requestAnimationFrame(this.animateDotOutline.bind(this));
  }

  toggleCursorSize(): void {
    if (this.cursorEnlarged) {
      this.$dot.style.transform = "translate(-50%, -50%) scale(0.75)";
      this.$outline.style.transform = "translate(-50%, -50%) scale(1.5)";
    } else {
      this.$dot.style.transform = "translate(-50%, -50%) scale(1)";
      this.$outline.style.transform = "translate(-50%, -50%) scale(1)";
    }
  }

  toggleCursorVisibility(): void {
    if (this.cursorVisible) {
      this.$dot.style.opacity = "1";
      this.$outline.style.opacity = "1";
    } else {
      this.$dot.style.opacity = "0";
      this.$outline.style.opacity = "0";
    }
  }
}

// Initialize the cursor
const cursor = new Cursor();
cursor.init();
