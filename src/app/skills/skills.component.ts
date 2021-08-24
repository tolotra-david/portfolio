import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    { langage: "HTML & CSS", width: 90, color: 'blue' },
    { langage: "JAVASCRIPT & TYPESCRIPT", width: 80, color: 'orange' },
    { langage: "ANGULAR/ANGULAR MATERIAL", width: 80, color: 'blue' },
    { langage: "PHP", width: 80, color: 'blue' },
  ]
  isLoaded = false

  constructor() {
  }

  ngOnInit(): void {
  }
}
