import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';
import { Payment } from '../model/payment';
import { Name } from '../model/name';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.styl']
})
export class PaymentFormComponent {

  payment: Payment;
  name: Name;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private paymentService: PaymentService) {
    this.payment = new Payment();
	this.name = new Name();
  }

  onSubmit() {;
    this.paymentService.save(this.payment, this.name).subscribe((result : any) => this.gotoPaymentList());
  }

  gotoPaymentList() {
    this.router.navigate(['/payments']);
  }
}
