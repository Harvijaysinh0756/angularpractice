import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employees : any[] = [];
  public errorMSg : any;
  constructor(private _employeeservices : EmployeeService) { }

  ngOnInit(): void {
     this._employeeservices.getEmployees()
      .subscribe(data => this.employees = data,
                  error => this.errorMSg = error
        );
  }

}
