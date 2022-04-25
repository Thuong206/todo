import { Component, OnInit } from '@angular/core';
import mydata from './file.json'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  constructor() {

  }
  ngOnInit(): void {
  }
  // newdata: any = mydata

  // public joblist: string[] = [
  //   'viec 1',
  //   'viec 2',
  //   'viec 3'
  // ]
  // public truefalseEdit: boolean = true

  // public nameJob: string = ''
  // public titleEdit: string = 'Edit'

  // constructor() { }

  // ngOnInit(): void {
  // }


  // handleClose(e: number): void {
  //   // const close = e.target
  //   // console.log(close.dataset);
  //   console.log(e);
  //   // this.joblist.splice(e, 1)
  //   this.joblist = this.joblist.filter((item, index) => index != e)
  // }
  // handleSubmit(): void {
  //   // this.nameJob != ''
  //   //   ? this.joblist.push(this.nameJob)
  //   //   : confirm('Detecting not words!')
  //   if (this.nameJob != '') {
  //     this.joblist.push(this.nameJob)

  //   } else {
  //     confirm('Detecting not text!')
  //   }
  //   this.nameJob = ''
  // }
  // handleDone(e: any): void {
  //   e.style.textDecoration = 'line-through'
  //   console.log(e);
  // }
  // handleEdit(index: number): void {
  //   this.truefalseEdit = !this.truefalseEdit
  //   console.log(this.truefalseEdit, index);

  //   this.truefalseEdit ? this.titleEdit = "Edit" : this.titleEdit = "Save"
  // }

  public isWhy: boolean = true;
  public arr: any[] = [];
  handlePush(ip: any): void {
    this.arr.push(ip.value);
    ip.value = '';
  }
  handleEdit(ipValue: any, ip: any, index: number): void {
    this.isWhy = !this.isWhy;
    const data = ipValue.value;
    if (data !== '') {
      this.arr.splice(index, 1, ipValue.value);
    }
  }
}


