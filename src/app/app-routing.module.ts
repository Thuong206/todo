import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountDownComponent } from './count-down/count-down.component';
import { PostImageComponent } from './post-image/post-image.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: 'todolist', component: TodoListComponent },
  { path: 'countdown', component: CountDownComponent },
  { path: 'postimage', component: PostImageComponent },
  { path: 'api', component: ApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CountDownComponent, TodoListComponent, PostImageComponent, ApiComponent]