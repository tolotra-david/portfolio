import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isMenu: boolean = false
  isClose: boolean = false

  @ViewChild('sidebar')
  private sidebar: ElementRef;

  constructor() {}

  @HostListener('window:resize')
  private onResize() {
    if (window.innerWidth <= 768) {
      this.isMenu = true
    } else if(window.innerWidth >= 768) {
      this.isMenu = false;
    }
  }

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.isMenu = true
    } else if(window.innerWidth>= 768) {
      this.isMenu = false
    }
  }

  onOpenMenu(): void {
    this.isMenu = false;
    this.isClose = true;
    this.sidebar.nativeElement.style.width = '75%';
  }

  onCloseMenu(): void {
    this.isMenu = true;
    this.isClose = false;
    this.sidebar.nativeElement.style.width = '0';
  }

  isHidden(isClicked: boolean){
    if(isClicked && window.innerWidth <= 768){
      this.isMenu = true
      this.isClose = false
      this.sidebar.nativeElement.style.width="0"
    }
  }
}
