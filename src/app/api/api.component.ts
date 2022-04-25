import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  public log: any
  public truthy: boolean = true
  public ipLogic: boolean = true
  public search: string | number = ''

  constructor() { }
  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => { return res.json() })
      .then(res => {
        // this.log = JSON.stringify(res)
        this.log = res
        console.log(res);
      })
    setTimeout(() => {
      this.truthy = false
    }, 2000)
  }

  handleSearch(item: any): void {
    this.ipLogic = false
    console.log(this.search);

    this.search == '' ? ""
      : this.log = this.log.filter((item: any) => item.id === Number(this.search))
  }

}
