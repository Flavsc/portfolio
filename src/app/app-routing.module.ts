import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './screens/main/main.component';
import { AboutComponent } from './screens/about/about.component';
import { ProjectsComponent } from './screens/projects/projects.component';
import { ContactComponent } from './screens/contact/contact.component';
import { GalleryComponent } from './screens/gallery/gallery.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
