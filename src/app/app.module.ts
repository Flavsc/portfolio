import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ScreensComponent } from "./screens/screens.component";
import { UtilComponent } from "./util/util.component";
import { MainComponent } from "./screens/main/main.component";
import { NavbarComponent } from "./util/navbar/navbar.component";
import { ContactComponent } from "./screens/contact/contact.component";
import { AboutComponent } from "./screens/about/about.component";
import { ProjectsComponent } from "./screens/projects/projects.component";
import { FooterComponent } from "./util/footer/footer.component";
import { GalleryComponent } from "./screens/gallery/gallery.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    ScreensComponent,
    UtilComponent,
    MainComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
