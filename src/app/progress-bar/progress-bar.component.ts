import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  animations: [
    trigger('progress', [
      state('void', style({ width: 0 })),
      transition('void => *', [animate(2500), style({width: '*'})]),
    ]),
  ],
})
export class ProgressBarComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() skillName: string = '';
  @Input() skillValue: number = 0;
  count: string = '';
  @ViewChild('performanceWidth')
  private performanceWidth: ElementRef
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.setSkill()
  }

  ngAfterViewChecked(): void {
    const div: HTMLDivElement = this.performanceWidth.nativeElement
    div.style.width = this.skillValue + "%"
  }

  setSkill(): void {
    let count: number = 0;
    const setValue = () => {
      if (count === this.skillValue) clearInterval(value);
      else {
        count++;
        this.count = count + '%';
      }
    };
    let value = setInterval(setValue, 20);
  }
}
