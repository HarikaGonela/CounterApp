import { Component, OnDestroy, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrls: ['./add-delete.component.css']
})
export class AddDeleteComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  counterValue!: number;

  constructor(public operationService: OperationService) {
    this.subscription = this.operationService.counterValue$.subscribe((value)=>{this.counterValue = value});
   }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
  }
  decrement(){
    this.operationService.updateCounterValue(this.counterValue - 2);
  }
  increment(){
    this.operationService.updateCounterValue(this.counterValue + 2);
  }
}
