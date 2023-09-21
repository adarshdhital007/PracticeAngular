import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgAdarshComponent } from './ng-adarsh/ng-adarsh.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './ColorBlocks/layout.component';
import { ClassHighlightComponent } from './classhighlight/classhighlight.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { Cust1Component } from './cust1list/cust1/cust1.component';
import { Cust1ListComponent } from './cust1list/cust1list.component';



@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    NgAdarshComponent,
    LayoutComponent,
    ClassHighlightComponent,
    CustomerListComponent,
    CustomerComponent,
    Cust1Component,
    Cust1ListComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }