import { Component, OnInit } from '@angular/core';
import fromLeft from '../../animations/fromLeft';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: fromLeft
})
export class AboutComponent implements OnInit {
  isOpen = true;

  public socialNetworks: { iconName: string; link: string; }[];

  constructor() { }

  ngOnInit(): void {
    this.socialNetworks = [
      { iconName: 'akar-icons_facebook-fill.svg', link: 'https://www.facebook.com/ackirah.tolotra' },
      { iconName: 'Gmail_icon_(2020)-48x36.svg', link: 'mailto:tolotradavid2@gmail.com' },
      { iconName: 'akar-icons_linkedin-box-fill.svg', link: 'https://www.linkedin.com/in/tolotra-david-9b75441b4/' },
    ];
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
