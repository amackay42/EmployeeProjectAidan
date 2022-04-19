import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent} from './employee/employee.component';
const routes: Routes = [
  { path: '', component: CompanyComponent},
  { path: 'employee/:id', component: EmployeeComponent},
  { path: 'customer/:id', component: CustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CompanyComponent, EmployeeComponent, CustomerComponent]
