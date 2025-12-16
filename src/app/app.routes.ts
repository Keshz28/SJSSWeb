import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServicesComponent } from './services/services'; // Import this
import { ProjectsComponent } from './projects/projects';
import { ContactComponent } from './contact/contact';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent }, // Add this line
  { path: 'projects', component: ProjectsComponent }, // Add this line
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent } // Add this line
];
