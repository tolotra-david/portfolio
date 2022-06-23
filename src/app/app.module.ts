import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgParticlesModule } from 'ng-particles';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { xLg, list } from 'ngx-bootstrap-icons';


// COMPONENTS
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { AboutComponent } from './about/about.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


const icons = { xLg, list };

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ProgressBarComponent,
    SingleProjectComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    NgParticlesModule,
    NgxBootstrapIconsModule.pick(icons)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
