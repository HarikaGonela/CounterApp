import { Component, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  result = this.operationService.counterValue;

  constructor(public operationService : OperationService) { }

  ngOnInit(): void {
  }

   number:any = [1,2,3,4,5,6,7,8,9,10];
}
