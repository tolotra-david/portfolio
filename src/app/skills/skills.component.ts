import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    { langage: "HTML & CSS", width: 80, color: 'blue' },
    { langage: "JAVASCRIPT & TYPESCRIPT", width: 80, color: 'orange' },
    { langage: "ANGULAR", width: 60, color: 'blue' },
    { langage: "REACT", width: 40, color: 'blue' },
    { langage: "PHP & MYSQL", width: 50, color: 'blue' },
    { langage: "NODE, EXPRESS & MONGODB", width: 20, color: 'blue' },
    { langage: "BOOTSTRAP", width: 70, color: 'blue' },
    { langage: "WORDPRESS", width: 60, color: 'blue' },
  ]
  isLoaded = false

  constructor() {
  }

  ngOnInit(): void {
  }
}
