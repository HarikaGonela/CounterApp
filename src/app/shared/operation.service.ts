import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor() { }

  private counter = 2;

  get counterValue(){
    return this.counter;
  } 

  set counterValue(value:number){
    this.counter = value;
  }
}
