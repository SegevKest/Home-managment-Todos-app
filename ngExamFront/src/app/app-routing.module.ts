import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './comps/main/main.component';
import { AddTodoComponent } from './comps/add-todo/add-todo.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'add', component: AddTodoComponent},
  {path: '', component: MainComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
