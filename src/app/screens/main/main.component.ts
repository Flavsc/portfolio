import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  ngOnInit() {}

  constructor() {}

  openInNewTab(url: string): void {
    window.open(url, "_blank");
  }
}