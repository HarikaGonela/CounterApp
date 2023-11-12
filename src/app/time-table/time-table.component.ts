import { Component } from '@angular/core';
import { OperationService } from '../shared/operation.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent {
  value$: Observable<number>;
  number: number[] = [1,2,3,4,5,6,7,8,9,10];

  constructor(operationService : OperationService) {
    this.value$ = operationService.counterValue$;
  }

}
