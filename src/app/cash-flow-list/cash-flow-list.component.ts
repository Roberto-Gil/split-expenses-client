import { Component, OnInit } from '@angular/core';
import { CashFlow } from '../model/cash-flow';
import { CashFlowService } from '../service/cash-flow.service';

@Component({
  selector: 'app-cash-flow-list',
  templateUrl: './cash-flow-list.component.html',
  styleUrls: ['./cash-flow-list.component.styl']
})
export class CashFlowListComponent implements OnInit {

  cashFlows: CashFlow[];

  constructor(private cashFlowService: CashFlowService) {
   this.cashFlows = [];
  }

  ngOnInit(): void {
	  this.cashFlowService.findAll().toPromise().then((data : any) => {
      this.cashFlows = data;
    });
  }
}
