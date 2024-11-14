import { NgModule } from "@angular/core";
import { AppModule } from "../app.module";
import { UtilModule } from "../util/util.module";
import { MainComponent } from "./main/main.component";
import { AboutComponent } from "./about/about.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    MainComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [AppModule, UtilModule],
  exports: [MainComponent, AboutComponent, ProjectsComponent, ContactComponent],
})
export class ScreensModule {}
