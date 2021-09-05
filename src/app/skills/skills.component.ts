import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills = [
    { langage: 'ALGORITHIME', width: 65 },
    { langage: 'HTML & CSS', width: 90 },
    { langage: 'JAVASCRIPT/TYPESCRIPT', width: 80 },
    { langage: 'ANGULAR/ANGULAR MATERIAL', width: 80 },
    { langage: 'Node.js/Express.js', width: 30 },
    { langage: 'PHP version 5 et 7', width: 60 },
    { langage: 'REACT', width: 25 },
  ];
  isLoaded = false;

  constructor() {}

  ngOnInit(): void {}
}
