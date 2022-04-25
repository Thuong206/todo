import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoList';
  public name: string = "Thuong"
  public i: Boolean = false
  constructor(
    private router: Router
  ) {
  }


  onTodoList() {
    this.router.navigate(['todolist'])
    window.location.pathname != "/todolist" ? this.i = true : this.i = false
  }

  onCountDown() {
    this.router.navigate(['countdown'])
    window.location.pathname != "/countdown" ? this.i = true : this.i = false

  }

  onPost() {
    this.router.navigate(['postimage'])
    window.location.pathname != "/postimage" ? this.i = true : this.i = false
  }

  onApi() {
    this.router.navigate(['api'])
    window.location.pathname != "/api" ? this.i = true : this.i = false

  }

}
