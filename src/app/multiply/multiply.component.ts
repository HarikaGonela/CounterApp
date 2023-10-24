import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  counter = 1;
  constructor() { }

  ngOnInit(): void {
  }

  multiply(){
    this.counter = this.counter + (this.counter *2); 
  }

}
