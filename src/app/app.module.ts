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
import { DarkModeService } from './dark-mode.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalMaterialModule } from './weather-ui/shared/local-material.module';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { WeatherUIComponent } from './weather-ui/weather-ui.component';
import { TerminalComponent } from './about/terminal/terminal.component';
import { AboutComponent } from './about/about.component';
import { StockresponsiveComponent } from './stockresponsive/stockresponsive.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Cust1Component } from './cust1list/cust1/cust1.component';

@NgModule({
  declarations: [
    AppComponent,
    NgSwitchComponent,
    NgAdarshComponent,
    LayoutComponent,
    ClassHighlightComponent,
    CustomerListComponent,
    CustomerComponent,
    Cust1ListComponent,
    FormComponentComponent,
    DateListComponent,
    FilterByPipe,
    Cust1Component,
    JokeListComponent,
    JokeComponent,
    JokeAddComponent,
    Layout1Component,
    WeatherReportComponent,
    WeatherUIComponent,
    TerminalComponent,
    AboutComponent,
    StockresponsiveComponent,
    CarouselItemComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, BrowserAnimationsModule, LocalMaterialModule, CarouselModule.forRoot(),
  ],
  providers: [FormDataService, DarkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }