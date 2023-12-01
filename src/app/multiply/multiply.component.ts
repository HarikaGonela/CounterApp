import { Component, OnDestroy, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit, OnDestroy {

  private subscription : Subscription;
  counterValue!: number;

  constructor(public operationService: OperationService) {
    this.subscription = this.operationService.counterValue$.subscribe((value)=>{this.counterValue = value;});
   }
  

  ngOnInit(): void {
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  multiply(){
    this.operationService.updateCounterValue(this.counterValue * 2);
  }
}
