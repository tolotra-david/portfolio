import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  public skills: { iconLink: string, names: string[]; }[] = [];
  // Doughnut
  public doughnutChartLabels: string[] = ['ANGULAR', 'REACT', 'JAVASCRIPT', 'WORDPRESS'];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
    {
      data: [100, 70, 100, 100],
    },
  ];

  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        maxWidth: 100,
        labels: {
          font: {
            size: 12,
          },
          boxWidth: 30,
          color: 'white'
        },
        
      },
      
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.skills = [
      { iconLink: 'icon-angular.png', names: ['lazy loading', 'rjxs', 'ngrx'] },
      { iconLink: 'icon-react-native.png', names: ['redux', 'flux'] },
      { iconLink: 'icon-javascript.png', names: ['dom', 'ajax', 'jquery', 'typescript'] },
      { iconLink: 'icon-wp.png', names: ['theme', 'plugin', 'widget'] }
    ];
  }
}
