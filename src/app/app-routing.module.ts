import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    component: HomeComponent,
  },
  {
    path: 'projets',
    component: ProjectsComponent,
  },
  {
    path: 'competences',
    component: SkillsComponent,
  },
  {
    path: 'a-propos',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '/accueil',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
