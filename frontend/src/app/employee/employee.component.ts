import {Component, OnInit,} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employeemodel';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  employee: any;

  EMPLOYEE_DATA: Employee[] = [
    {firstName: 'Aidan', lastName: 'Mackay', title: 'Full Stack Intern', location: 'Minneapolis, MN', id: 1},
    {firstName: 'Chance', lastName: 'Snow', title: 'Full Stack Developer', location: 'Iowa City, IA', id: 2},
    {firstName: 'Jane', lastName: 'Doe', title: 'Director of Marketing', location: 'Des Moines, IA', id: 3},
    {firstName: 'John', lastName: 'Smith', title: 'Human Resources', location: 'Iowa City, IA', id: 4}
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
  }
    goToDashboard() {
      this.router.navigate(["/company"])
   }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    this.employee = this.EMPLOYEE_DATA.find((employee: { id: any; }) => employee.id === productIdFromRoute);
    }




  }


