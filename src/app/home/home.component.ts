import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description: string = `Lorem ipsum dolor, sit 
    amet consectetur adipisicing elit. 
    Deserunt, nemo. Porro cumque asperiores 
    corrupti molestiae consequuntur, sapiente 
    vitae, dignissimos debitis accusamus, obcaecati at. 
    Consequuntur quisquam explicabo placeat tenetur provident adipisci.`

  constructor() { }

  ngOnInit(): void {
  }

}
