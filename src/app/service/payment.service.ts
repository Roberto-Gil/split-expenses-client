import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../model/payment';
import { Name } from '../model/name';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private paymentListUrl: string;
  private paymentUrl: string;

  constructor(private http: HttpClient) {
	this.paymentListUrl = '/SplitExpense/payments';
	this.paymentUrl = '/SplitExpense/friend/:name/payment';
  }

  public findAll(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentListUrl);
  }

  public save(Payment: Payment, Name: Name) {
	let name = Name.value; 
	let url = this.paymentUrl.replace(':name', name);
    return this.http.post<Payment>(url, Payment);
  }
}
