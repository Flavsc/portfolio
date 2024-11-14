import { NgModule } from "@angular/core";
import { AppModule } from "../app.module";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [AppModule],
  exports: [NavbarComponent, FooterComponent],
})
export class UtilModule {}
