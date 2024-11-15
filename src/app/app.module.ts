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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
