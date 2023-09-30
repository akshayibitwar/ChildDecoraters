import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  todoArray : Array<string> = []; 
  todoItem !: string;
  @ViewChild("todoControl") todoControl !: ElementRef;
  constructor(){}

  // 1)===> by using ==>>((twowaybinding method))
  // onTodoAdd(){
  //   console.log(this.todoItem)   
    // this.todoArray.push(this.todoItem)
    // this.todoItem = '';
   
   // 2) ==> by using ==>>((Element-Refrence)). 
    // onTodoAdd()
    // let val = this.todoControl.nativeElement.value;
    // console.log(val);
    // this.todoArray.push(val);

    // 3)==> by using Argument..
    // onTodoAdd(todo : HTMLInputElement){
    //   console.log(todo.value);
    //   this.todoArray.push(todo.value);
      
    onTodoAdd(todo : string){
        console.log(todo);
        this.todoArray.push(todo);
  
}

}


