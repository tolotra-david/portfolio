import { NgParticleComponent } from './../../components/ng-particle/ng-particle.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgParticlesModule } from 'ng-particles';

@NgModule({
  declarations: [HomeComponent, NgParticleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgParticlesModule
  ]
})
export class HomeModule { }
