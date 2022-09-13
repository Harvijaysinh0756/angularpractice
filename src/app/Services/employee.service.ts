import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IEmployee } from '../model/employee';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment'





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
// using path 
  // private url : string = "/assets/data/employee.json";
  constructor(private http : HttpClient) { }

  // getEmployee()
  // {
  //   return [
  //     {id: 1, name : "harvijay", age : 22 },
  //     {id: 2, name : "jay", age : 22 },
  //     {id: 3, name : "jayraj", age : 22 },
  //     {id: 4, name : "jayrajsinh", age : 22 },
  //   ]; 
  // }

  getEmployees() : Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(environment.employee)
                     .pipe(catchError(this.errorHandler));                   
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error")    
  }
}
