import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './comps/main/main.component';
import { HeaderComponent } from './comps/header/header.component';
import { AddTodoComponent } from './comps/add-todo/add-todo.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { FamilyTableComponent } from './comps/family-table/family-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AddTodoComponent,
    NotFoundComponent,
    FamilyTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
