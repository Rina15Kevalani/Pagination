import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  items:string[]= [];
  newTask = ''


  addToList() {
   if (this.newTask == '') {
   }
   else {
     this.items.push(this.newTask);
     this.newTask = '';
   }
 }

  deleteTask(index: number) {
   this.items.splice(index, 1);
 }
}
