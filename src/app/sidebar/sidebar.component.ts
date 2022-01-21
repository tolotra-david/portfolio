import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

import { faHome,faIdBadge,faUserAlt,faWrench,IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  name: string = 'rakotorina';
  firstName: string = 'tolotra david';
  statut: string = 'développeur front-end';
  navigations: Array<any> = [];
  
  @ViewChild('navigationMenu')
  private navigationMenu: ElementRef;

  @ViewChild('backgroundActive')
  private backgroundActive: ElementRef;

  @Output() isClicked : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

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

  ngAfterViewChecked(): void {
    this.loadActive();
  }

  loadActive() {
    const ul: HTMLUListElement = this.navigationMenu.nativeElement;
    let menus: HTMLCollection = ul.children;
    for (let i = 0; i < menus.length; i++) {
      if (menus[i].className === 'active') {
        this.givePosition(menus[i] as HTMLElement);
      }
    }
  }

  giveOutput(): void {
    this.isClicked.emit(true);
  }

  givePosition(link: HTMLElement) {
    const backgroundElement: HTMLDivElement =
      this.backgroundActive.nativeElement;
    backgroundElement.style.height = link.offsetHeight + 'px';
    backgroundElement.style.transform = 'translateY(' + link.offsetTop + 'px)';
  }
}
