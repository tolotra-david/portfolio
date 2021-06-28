import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string = 'rakotorina'
  firstName: string = 'tolotra david'
  statu: string = 'frontend developer'
  navigations: Array<string> = ['home', 'about', 'skills', 'projects']
  constructor() { }

  ngOnInit(): void {
  }

}
