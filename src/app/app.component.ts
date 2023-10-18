import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CounterApp';
  counter = 0;

  decrement(){
    this.counter = this.counter-2;
  }
  increment(){
    this.counter = this.counter+2;
  }

}
