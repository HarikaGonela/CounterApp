import { Injectable } from '@angular/core';
import {BehaviorSubject, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  private counter = new BehaviorSubject(2)

  public counterValue$ = this.counter.asObservable()

  getCounterValue() {
    return this.counter.value
  }

  updateCounter(newValue: number) {
    this.counter.next(newValue)
  }
}
