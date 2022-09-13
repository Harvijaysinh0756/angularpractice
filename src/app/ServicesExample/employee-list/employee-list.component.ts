import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees : any[] = [];

  constructor(private _employeeservices : EmployeeService) { }

  

  ngOnInit(): void {
    // this.employees = this._employeeservices.getEmployee();

      this._employeeservices.getEmployees()
       .subscribe(data =>{
         this.employees = data
          // console.log("testing",data);
        })
   
  }

}
