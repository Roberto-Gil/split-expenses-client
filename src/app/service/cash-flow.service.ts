import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CashFlow } from '../model/cash-flow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashFlowService {

  private cashFlowUrl: string;

  constructor(private http: HttpClient) {
   	this.cashFlowUrl = '/SplitExpense/cashFlows';
  }
  
  public findAll(): Observable<CashFlow[]> {
    return this.http.get<CashFlow[]>(this.cashFlowUrl);
  }
}
