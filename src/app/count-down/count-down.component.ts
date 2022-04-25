import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {


  public count: number = 60
  constructor() {
  }
  ngOnInit(): void {

  }

  public boo: boolean = true
  handleStop(): void {
  }
  handleStart(e: any, valueH2: any, b1: any, b2: any): void {
    const Stop = setInterval(
      () => {
        this.count = this.count - 1
        this.count == 0 ? clearInterval(Stop) : ""
        if (this.count <= 0) {
          clearInterval(Stop)
        } else {
          b1.style.pointerEvents = "none";
          b1.style.opacity = 0.5
          b2.style.pointerEvents = "none";
          b2.style.opacity = 0.5
          e.target.style.pointerEvents = "none";
          e.target.style.opacity = 0.5
        }
      }, 1000,
      console.log(e.target.innerText)
    )
    this.boo ? this.boo = false : this.boo = true
    valueH2.target.innerText === "Stop" ? this.count = Number(valueH2.innerText) : ''
  }

  handlePlush(valueH2: any): void {
    console.log(Number(valueH2.innerText));
    const updatePlush = valueH2.innerText + 1
    this.count = Number(updatePlush)

  }
  handlePrev(valueH2: any): void {
    const updatePrev = valueH2.innerText - 1
    console.log(Number(updatePrev));
    this.count = Number(updatePrev)
  }

}
