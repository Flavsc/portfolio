import { Component } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent {

  cards = [
    { id: 1, title: "conheça a mazca", image: "../assets/coruja_branca.svg" },
    { id: 2, title: "texto", image: "../assets/coruja_branca.svg" },
    { id: 3, title: "texto", image: "../assets/coruja_branca.svg" },
    { id: 4, title: "texto", image: "../assets/coruja_branca.svg" },
  ];

  constructor() {}

}
