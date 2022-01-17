import {
  AfterViewInit,
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
export class AppComponent implements OnInit, AfterViewInit {
  isClose: boolean = true
  @ViewChild('sidebar')
  private sidebar: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }


  isHidden(isClicked: boolean):void {
    if(isClicked){
      this.isClose = true
      this.sidebar.nativeElement.style.width = '0';
      this.sidebar.nativeElement.style.opacity = '0';
    }
  }

  onOpenMenu(): void {
    this.isClose = !this.isClose
    if (this.isClose) {
      this.sidebar.nativeElement.style.width = '0';
      this.sidebar.nativeElement.style.opacity = '0';
    } else {
      this.sidebar.nativeElement.style.width = '100%';
      this.sidebar.nativeElement.style.opacity = '1';
    }
  }
}
