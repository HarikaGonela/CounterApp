import { Component, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent {
  operationService: OperationService;

  constructor(operationService: OperationService) {
    this.operationService = operationService;
  }

  multiply(){
    const currentValue = this.operationService.getCounterValue()
    this.operationService.updateCounter(currentValue * 2)
  }
}
