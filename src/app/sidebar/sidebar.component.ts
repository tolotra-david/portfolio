import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewChecked, AfterViewInit {
  name: string = 'rakotorina';
  firstName: string = 'tolotra david';
  statu: string = 'frontend developer';
  navigations: Array<string> = [];
  
  @ViewChild('navigationMenu')
  private navigationMenu: ElementRef;
  
  @ViewChild('backgroundActive')
  private backgroundActive: ElementRef;

  @Output() isClicked = new EventEmitter<boolean>()

  constructor() {}

  ngOnInit(): void {
    this.navigations = ['accueil', 'competences', 'projets']
  }

  ngAfterViewChecked(): void {
  }
  
  ngAfterViewInit(): void {
    this.loadActive();
  }

  loadActive() {
    const ul: HTMLUListElement = this.navigationMenu.nativeElement;
    let menus: HTMLCollection = ul.children;
    setTimeout(() => {
      for (let i = 0; i < menus.length; i++) {
        if (menus[i].className === 'active') {
          this.givePosition(menus[i] as HTMLElement);
        }
      }
    }, 0)
  }

  giveOutput(): void{
    this.isClicked.emit(true)
  }

  givePosition(link: HTMLElement) {
    const backgroundElement = this.backgroundActive.nativeElement;
    backgroundElement.style.height =  link.offsetHeight + 'px'
    backgroundElement.style.top = link.offsetTop + 'px';
  }
}
