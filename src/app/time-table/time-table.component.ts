import { Component, OnDestroy, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit, OnDestroy {
  result!: number;
  private subscription : Subscription;

  constructor(public operationService : OperationService) {
    this.subscription = this.operationService.counterValue$.subscribe((value)=> this.result = value); }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    
  }

   number:any = [1,2,3,4,5,6,7,8,9,10];
}
