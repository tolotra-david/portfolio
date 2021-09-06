import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'NSI-MADA',
      description: "J'ai créé ce site en 2020.",
      techno: 'WORDPRESS, ELEMENTOR',
      img: './assets/images/nsi-mada.png',
    },
    {
      title: 'GESTIONNAIRE DE STOCK PHARMACIE',
      description:
        'Jai appris le Framwork Angular grâce à mon stage chez Young-dev.',
      techno:
        'ANGULAR, ANGULAR MATERIAL, NGX-BOOTSTRAP, NGX-DATATABLE, NGX-CHART',
      img: './assets/images/young-dev.png',
      class: 'react',
    },
    {
      title: 'MODAL et CAROUSEL',
      description:
        "Je me suis mis à l'épreuve de créer un Modal et un Carousel avec Javascript sans utiler un Framwork.",
      techno:
        'HTML5, CSS3, JAVASCRIPT',
      img: './assets/images/vanilla.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
