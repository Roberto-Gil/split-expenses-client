import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.styl'],
  providers: [PaymentService]
})
export class PaymentListComponent implements OnInit {

  payments: Payment[];

  constructor(private paymentService: PaymentService) {
   this.payments = [];
  }

  ngOnInit(): void {
	  this.paymentService.findAll().toPromise().then((data : any) => {
      this.payments = data;
    });
  }

}
