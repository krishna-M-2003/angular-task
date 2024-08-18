import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-detial',
  standalone: true,
  imports: [CommonModule],
  template: `
  
  <h2>employee-detials</h2>
  <ul *ngFor="let employee of employees">
<li>{{employee.id}}.{{employee.name}} - {{employee.age}}</li>
  </ul>

  `,

  styles: []

})
export class Test2Component {

  employees:any = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    debugger;
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data);
 }


}
