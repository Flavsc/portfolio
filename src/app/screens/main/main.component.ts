import { Component, OnInit } from "@angular/core";

interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  cards = [
    { id: 1, title: "texto", image: "../assets/166logo.png" },
    { id: 2, title: "texto", image: "../assets/166logo.png" },
    { id: 3, title: "texto", image: "../assets/166logo.png" },
    { id: 4, title: "conheça a mazca", image: "../assets/coruja_branca.svg" },
  ];

  socialLinks: SocialLink[] = [
    {
      platform: "Instagram",
      icon: "fab fa-instagram",
      url: "https://www.instagram.com/fravo__",
    },
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin",
      url: "https://www.linkedin.com/in/flavio-carvalho-382b82263",
    },
    {
      platform: "X",
      icon: "fab fa-twitter",
      url: "https://www.x.com/",
    },
    {
      platform: "Email",
      icon: "fas fa-envelope",
      url: "mailto:flavsc.brz@gmail.com",
    },
  ];

  ngOnInit() {
    console.log("Social Links:", this.socialLinks);
  }

  constructor() {}
}