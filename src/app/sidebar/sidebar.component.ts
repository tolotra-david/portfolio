import {Component, OnInit, AfterViewChecked } from "@angular/core"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  name: string = 'rakotorina'
  firstName: string = 'tolotra david'
  statu: string = 'frontend developer'
  navigations: Array<string> = ['home', 'about', 'skills', 'projects']
  constructor() { }

  ngOnInit(): void {
  }


  ngAfterViewChecked(): void {
    this.loadActive()
  }

  loadActive(){
    const ul: HTMLUListElement | null = document.querySelector(".navigation")
    if(ul){
      let lis: HTMLCollection = ul.children
      for (let i = 0; i < lis.length; i++) {
        if(lis[i].className === 'active'){
          this.givePosition(lis[i])
        }
      }
    }
  }

  givePosition(link: any){
    const backgroundElement: HTMLDivElement | null = document.querySelector(".background-active")
    if(backgroundElement){
      const difference = (link.offsetTop - ((backgroundElement.offsetHeight / 2) - (link.offsetHeight / 2)))
      backgroundElement.style.top = difference + "px"
    }
  }


}
