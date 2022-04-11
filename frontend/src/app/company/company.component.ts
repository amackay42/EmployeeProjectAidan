import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/customermodel';
import { Employee } from '../models/employeemodel';

export interface EmployeeList {
  name: string;
  position: number;
}
export interface CustomerList {
  name: string;
  position: number;
}
const EMPLOYEE_DATA: Employee[] = [
  {firstName: 'Aidan', lastName: 'Mackay', title: 'Full Stack Intern', location: 'Minneapolis, MN', id: 1},
  {firstName: 'Chance', lastName: 'Snow', title: 'Full Stack Developer', location: 'Iowa City, IA', id: 2},
  {firstName: 'Jane', lastName: 'Doe', title: 'Director of Marketing', location: 'Des Moines, IA', id: 3},
  {firstName: 'John', lastName: 'Smith', title: 'Human Resources', location: 'Iowa City, IA', id: 4}
];

const CUSTOMER_DATA: Customer[] = [
  {name: 'Facebook', address: 'San Fransisco', emailAddress: 'markzuckerberg@facebook.com', details: 'Social media platform', id: 1},
    {name: 'Netflix', address: 'San Fransisco', emailAddress: 'tedsarandos@netflix.com', details: 'Streaming platform', id: 2},
    {name: 'Apple', address: 'San Fransisco', emailAddress: 'timcook@apple.com', details: 'Technology company', id: 3},
    {name: 'Amazon', address: 'San Fransisco', emailAddress: 'jeffbezos@amazon.com', details: 'Online marketplace', id: 4}
];

@Component({
  selector: 'app-company',
 styleUrls: ['company.component.css'],
 templateUrl: 'company.component.html'
})
export class CompanyComponent {
  displayedColumns: string[] = ['position', 'name'];
  employeeSource = EMPLOYEE_DATA;
  customerSource = CUSTOMER_DATA;

  constructor(private router: Router) {

 }
  goToEmployee(employee: { id: any; }) {
   this.router.navigate(["/employee/", employee.id])

 }
 goToCustomer(customer: { id: any; }) {
  this.router.navigate(["/customer/", customer.id])
 }
 getSum() {
  return EMPLOYEE_DATA.length;
 }
}
