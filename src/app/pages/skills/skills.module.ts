import { SkillItemComponent } from './../../components/skill-item/skill-item.component';
import { SkillsComponent } from './skills.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { SkillsRoutingModule } from './skills-routing.module';

@NgModule({
  declarations: [SkillsComponent, SkillItemComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    NgChartsModule
  ]
})
export class SkillsModule { }
