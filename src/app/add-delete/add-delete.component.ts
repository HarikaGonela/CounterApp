import { Component, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';

@Component({
  selector: 'app-add-delete',
  templateUrl: './add-delete.component.html',
  styleUrls: ['./add-delete.component.css']
})
export class AddDeleteComponent implements OnInit {

  constructor(public operationService: OperationService) { }

  ngOnInit() {
    
  }
  decrement(){
    this.operationService.counterValue = this.operationService.counterValue - 2;
  }
  increment(){
    this.operationService.counterValue = this.operationService.counterValue + 2;
  }
}
