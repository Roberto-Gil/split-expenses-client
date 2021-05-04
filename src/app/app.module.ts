import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { FriendService } from './service/friend.service';
import { PaymentService } from './service/payment.service';
import { CashFlowListComponent } from './cash-flow-list/cash-flow-list.component';
import { CashFlowService } from './service/cash-flow.service';

@NgModule({
  declarations: [
    AppComponent,
    FriendListComponent,
    PaymentListComponent,
    FriendFormComponent,
    PaymentFormComponent,
    CashFlowListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FriendService, PaymentService, CashFlowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
