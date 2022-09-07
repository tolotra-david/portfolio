import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {

  public projects: { title: string, description: string, link: string, imgName: string; }[];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      { title: 'carousel', description: 'Frontend Developer', link: 'https://gitlab.com/tolotradavid2/gallery', imgName: 'carousel' },
      { title: 'caisse d\epargne madagascar', description: 'wordpress maintenance', link: 'https://www.caissedepargne.mg/', imgName: 'cem' },
      { title: 'maison et tradition', description: 'wordpress developer', link: 'https://www.maisonetradition.mg/', imgName: 'maison-tradition' },
      { title: 'NSI madagascar', description: 'wordpress developer', link: 'https://nsi-mada.com/', imgName: 'nsi-mada' },
      { title: 'sunref madagascar', description: 'wordpress developer', link: 'https://sunref.solidis.org/', imgName: 'sunref' },
    ];
  }
}
