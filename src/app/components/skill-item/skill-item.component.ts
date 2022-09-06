import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input()
  public skills: { iconLink: string, names: string[]; }[];
  constructor() { }

  ngOnInit(): void {
  }

}
