import {
  Component,
  OnInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  name: string = 'rakotorina';
  firstName: string = 'tolotra david';
  statut: string = 'Frontend developer';
  navigations: Array<any> = [];
  @Output() selectedLink = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.navigations = [
      {
        icon: 'home',
        name: 'home',
      },
      {
        icon: 'engineering',
        name: 'skills',
      },
      {
        icon: 'insert_chart_outlined',
        name: 'projects',
      },
      {
        icon: 'perm_identity',
        name: 'about',
      },
    ];
  }

  public handleSelectedLink() {
    this.selectedLink.emit(true);
  }

}
