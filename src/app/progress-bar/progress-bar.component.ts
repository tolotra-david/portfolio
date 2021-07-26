import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() skillName: string = ''
  @Input() skillValue: number = 0
  @Input() skillColor: string = ''
  width: string = ''
  count: string = ''
  constructor() {
    this.setWidth()
    this.setSkill()
  }

  ngOnInit(): void {

  }

  calculateWidth() {
    for (let i = 1; i <= this.skillValue; i++) {
      this.width = i + "%"
    }
  }
  /**
   * Give the width step by step
   */
  setWidth(): void {
    setTimeout(() => {
      this.calculateWidth()
    }, 300)
  }

  setSkill(): void{
    let count: number = 0
    const setValue = () => {
      if (count === this.skillValue) clearInterval(value)
      else {
        count++
        this.count = count + "%"
      }
    }
    let value = setInterval(setValue, 27)
  }

  getSkillValueSecond() {
    return (this.skillValue * 30) + "ms"
  }
}
