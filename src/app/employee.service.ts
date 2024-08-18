import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core'; // import HTTP 
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';



@Injectable({
  providedIn: 'root'
})

@Injectable()

export class EmployeeService {

  private _url: string = "/assets/employee.json";

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    debugger;
    return this.http.get<IEmployee[]>(this._url)
  }

  
}
