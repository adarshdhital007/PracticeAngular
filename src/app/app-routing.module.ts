import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgAdarshComponent } from './ng-adarsh/ng-adarsh.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { LayoutComponent } from './ColorBlocks/layout.component';
import { ClassHighlightComponent } from './classhighlight/classhighlight.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { Cust1ListComponent } from './cust1list/cust1list.component';
import { FormComponentComponent } from './form-component/form-component.component';
const routes: Routes = [
  { path: 'adarsh', component: NgAdarshComponent },
  { path: 'switch', component: NgSwitchComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'highlight', component: ClassHighlightComponent },
  { path: 'clist', component: CustomerListComponent },
  { path: 'c1list', component: Cust1ListComponent },
  { path: 'form', component: FormComponentComponent },
  // You can add more routes here if needed
  // For example, a default route or a wildcard route
  // { path: '', redirectTo: '/adarsh', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
