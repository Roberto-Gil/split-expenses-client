import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { CashFlowListComponent } from './cash-flow-list/cash-flow-list.component';

const routes: Routes = [
  { path: 'friends', component: FriendListComponent },
  { path: 'addfriend', component: FriendFormComponent },
  { path: 'payments', component: PaymentListComponent },
  { path: 'addpayments', component: PaymentFormComponent },
  { path: 'cashFlows', component: CashFlowListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
