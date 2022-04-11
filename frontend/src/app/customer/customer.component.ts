import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customermodel';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: any;

  CUSTOMER_DATA: Customer[] = [
    {name: 'Facebook', address: 'San Fransisco', emailAddress: 'markzuckerberg@facebook.com', details: 'Social media platform', id: 1},
    {name: 'Netflix', address: 'San Fransisco', emailAddress: 'tedsarandos@netflix.com', details: 'Streaming platform', id: 2},
    {name: 'Apple', address: 'San Fransisco', emailAddress: 'timcook@apple.com', details: 'Technology company', id: 3},
    {name: 'Amazon', address: 'San Fransisco', emailAddress: 'jeffbezos@amazon.com', details: 'Online marketplace', id: 4}
  ];

  constructor(private router: Router, private route: ActivatedRoute) {

  }
    goToDashboard() {
      this.router.navigate(["/company"])
   }

  ngOnInit() {
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('id'));
      this.customer = this.CUSTOMER_DATA.find((customer: { id: any; }) => customer.id === productIdFromRoute);
  }
}
