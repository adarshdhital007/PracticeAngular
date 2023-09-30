import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
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
import { FormComponentComponent } from './form-component/form-component.component';
import { DateListComponent } from './date-list/date-list.component';
import { FilterByPipe } from './filter.pipe';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeComponent } from './joke-list/joke/joke.component';
import { JokeAddComponent } from './joke-list/joke-add/joke-add.component';
import { FormDataService } from './form-component/form-data.service';
import { HttpClientModule } from '@angular/common/http';
import { Layout1Component } from './layout1/layout1.component';
import { DarkModeToggleComponent } from './dark-mode-toggle/dark-mode-toggle.component';
import { DarkModeService } from './dark-mode.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalMaterialModule } from './shared/local-material.module';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { WeatherUIComponent } from './weather-ui/weather-ui.component';
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
    FormComponentComponent,
    DateListComponent,
    FilterByPipe,
    JokeListComponent,
    JokeComponent,
    JokeAddComponent,
    Layout1Component,
    DarkModeToggleComponent,
    WeatherReportComponent,
    WeatherUIComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule,LocalMaterialModule
  ],
  providers: [FormDataService,DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }