import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  name: string = 'rakotorina';
  firstName: string = 'tolotra david';
  statu: string = 'développeur front-end';
  navigations: Array<any> = [];

  @ViewChild('navigationMenu')
  private navigationMenu: ElementRef;

  @ViewChild('backgroundActive')
  private backgroundActive: ElementRef;

  @Output() isClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.navigations = [
      {
        icon: 'home',
        name: 'accueil',
      },
      {
        icon: 'bookmark',
        name: 'competences',
      },
      {
        icon: 'build',
        name: 'projets',
      },
      {
        icon: 'person',
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
    console.log('répétion : ');
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
