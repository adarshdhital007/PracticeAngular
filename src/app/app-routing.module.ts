import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAdarshComponent } from './ng-adarsh/ng-adarsh.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { LayoutComponent } from './ColorBlocks/layout.component';
import { ClassHighlightComponent } from './classhighlight/classhighlight.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Cust1ListComponent } from './cust1list/cust1list.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { DateListComponent } from './date-list/date-list.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { Layout1Component } from './layout1/layout1.component';
import { WeatherReportComponent } from './weather-report/weather-report.component';
import { WeatherUIComponent } from './weather-ui/weather-ui.component';
import { AboutComponent } from './about/about.component';
import { StockresponsiveComponent } from './stockresponsive/stockresponsive.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', component: Layout1Component },
  { path: 'adarsh', component: NgAdarshComponent },
  { path: 'switch', component: NgSwitchComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'highlight', component: ClassHighlightComponent },
  { path: 'clist', component: CustomerListComponent },
  { path: 'c1list', component: Cust1ListComponent },
  { path: 'form', component: FormComponentComponent },
  { path: 'date', component: DateListComponent },
  { path: 'joke', component: JokeListComponent },
  { path: 'about', component: AboutComponent},
  { path: 'stock', component: StockresponsiveComponent},
  { path: 'carousel', component: CarouselComponent},
  {
    path: 'weather',
    component: WeatherUIComponent,
    children: [
      {
        path: ':cityName', // Define a parameter named cityName
        component: WeatherReportComponent,
      }
    ],},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
