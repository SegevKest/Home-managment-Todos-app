import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/service/Home.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  addTodo: FormGroup;

  constructor(private homeService: HomeService) {
    this.addTodo = new FormGroup({

      content: new FormControl('', Validators.required),
      creationDate: new FormControl('',  Validators.required),
      famMemberID: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }


  addTodoList(): void {
    this.homeService.addTodo(this.addTodo.value)
    .subscribe(data => {
      this.homeService.updateStack();
    });
  }

}
