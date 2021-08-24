import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewChecked {
  name: string = 'rakotorina';
  firstName: string = 'tolotra david';
  statu: string = 'frontend developer';
  navigations: Array<string> = ['home', 'skills', 'projects'];

  @ViewChild('navigationMenu')
  private navigationMenu: ElementRef;

  @ViewChild('backgroundActive')
  private backgroundActive: ElementRef;
  constructor() {}

  ngOnInit(): void {}

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

  givePosition(link: HTMLElement) {
    const backgroundElement = this.backgroundActive.nativeElement;
    const difference =
      link.offsetTop -
      (backgroundElement.offsetHeight / 2 - link.offsetHeight / 2);
    backgroundElement.style.top = difference + 'px';
  }
}
