import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      title: 'crud',
      techno: 'angular 12, angular material',
      img: '../../assets/images/crudmean.jpeg',
      class: 'angular'
    },
    {
      title: 'simple todolist',
      techno: 'react v.16, material design',
      img: '../../assets/images/react.svg',
      class: 'react'
    },
    {
      title: 'crud',
      techno: 'php v.7, mysql, bootstrap 4',
      img: '../../assets/images/phpmysql.png',
      class: 'phpmysql'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
