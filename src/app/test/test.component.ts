import { CommonModule, } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-list',

  standalone: true,

  imports: [CommonModule],

  template: `

  <h2>Employee List</h2>

  <ul *ngFor="let employee of employees">

  <li>{{employee.name}}</li>

  </ul>
  `,

  styles: []

})
export class TestComponent {


  employees:any = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
     this._employeeService.getEmployees()
         .subscribe(data => this.employees = data);
  }



}
