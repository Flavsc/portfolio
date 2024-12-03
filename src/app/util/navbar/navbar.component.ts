import { Component } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  menuOpen = false;
  links: { title: string; url: string }[] = [
    { title: "home", url: "" },
    { title: "about", url: "/about" },
    { title: "projects", url: "/projects" },
    { title: "gallery", url: "/gallery" },
    { title: "contact", url: "/contact" },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
