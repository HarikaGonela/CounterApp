import { Component, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrls: ['./add-delete.component.css']
})
export class AddDeleteComponent {
  operationService: OperationService;

  constructor(operationService: OperationService) {
    this.operationService = operationService;
  }

  decrement(){
    const currentValue = this.operationService.getCounterValue()
    this.operationService.updateCounter(currentValue - 2)
  }

  increment(){
    const currentValue = this.operationService.getCounterValue()
    this.operationService.updateCounter(currentValue + 2)
  }

}
