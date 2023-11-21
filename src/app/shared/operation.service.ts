import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  counterValue$ = new BehaviorSubject<number>(2); 

  updateCounterValue(newCounterValue : number){
    this.counterValue$.next(newCounterValue);
  }
}
