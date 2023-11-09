import { Component, OnInit } from '@angular/core';
import { OperationService } from '../shared/operation.service';


@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  constructor(public operationService: OperationService) { }
  

  ngOnInit(): void {
  }
  
  multiply(){
    this.operationService.counterValue = this.operationService.counterValue * 2;
  }
}
