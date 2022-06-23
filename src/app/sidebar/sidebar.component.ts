import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

import { faHome, faIdBadge, faUserAlt, faWrench, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  name: string = 'rakotorina';
  firstName: string = 'tolotra david';
  statut: string = 'développeur front-end';
  navigations: Array<any> = [];
  @Output() selectedLink = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.navigations = [
      {
        icon: faHome,
        name: 'accueil',
      },
      {
        icon: faIdBadge,
        name: 'competences',
      },
      {
        icon: faWrench,
        name: 'projets',
      },
      {
        icon: faUserAlt,
        name: 'a-propos',
      },
    ];
  }

  public handleSelectedLink() {
    this.selectedLink.emit(true);
  }

}
