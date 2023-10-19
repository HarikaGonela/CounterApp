import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrls: ['./add-delete.component.css']
})
export class AddDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 0;

  decrement(){
    this.counter = this.counter-2;
  }
  increment(){
    this.counter = this.counter+2;
  }

}
