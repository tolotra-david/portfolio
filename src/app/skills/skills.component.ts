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
    { langage: "Node.js/Express.js", width: 40, color: 'blue' },
    { langage: "PHP version 5 et 7", width: 60, color: 'blue' },
    { langage: "SYMFONY", width: 10, color: 'blue' },
  ]
  isLoaded = false

  constructor() {
  }

  ngOnInit(): void {
  }
}
