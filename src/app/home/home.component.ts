import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstName: string = "rakotonirina"
  lastName: string = "tolotra david"

  constructor() { }

  ngOnInit(): void {
  }

}
