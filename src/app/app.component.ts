import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  isMobile: boolean = false;
  isClose: boolean = true;
  private windowWidth: number = 0;

  @ViewChild('sidebar')
  private sidebar: ElementRef;

  @HostListener('window:resize', ['$event'])
  private handleResize(event: any) {
    this.windowWidth = event.target.innerWidth;
    this.testIsMobile();
  }
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.windowWidth = window.innerWidth;
    this.testIsMobile();
  }

  private testIsMobile() {
    if (this.windowWidth <= 768) {
      this.isMobile = true;
      this.sidebar.nativeElement.style.width = 0;
    } else {
      this.isMobile = false;
      this.sidebar.nativeElement.style.width = '20%';
    }
  }

  public onOpenMenu() {
    this.isClose = !this.isClose;
    if (!this.isClose) {
      this.sidebar.nativeElement.style.width = '100%';
    } else {
      this.sidebar.nativeElement.style.width = 0;
    }
  }

  public handleClickSidebar(isClicked: boolean) {
    if (isClicked && this.windowWidth <= 768) {
      this.sidebar.nativeElement.style.width = 0;
      this.isClose = true;
    }
  }
}
