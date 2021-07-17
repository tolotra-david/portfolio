import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class AppComponent implements OnInit{
  isDesktop = true
  // onResize(event: any){
  //   if(event.target.innerWidth < 768) this.isDesktop = !this.isDesktop
  // }

  ngOnInit(): void{
    if(window.innerWidth < 768) this.isDesktop = !this.isDesktop
  }
}
