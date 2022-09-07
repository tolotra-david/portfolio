import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  @Input()
  title: string
  @Input()
  description: string
  @Input()
  techno: string
  @Input()
  imgSrc: string
  constructor() { }

  ngOnInit(): void {
  }

}
