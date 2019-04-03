import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class CustomerService {

  constructor(private http: HttpClient) { }
  customers = [];
  private customerUrl = 'http://192.168.0.93:3000/api/customers';

  getRemoteCustomers(): Observable<[]>{
  	return this.http.get<[]>(this.customerUrl); 		
 }

addRemoteCustomer(customer): Observable<any>{
  return this.http.post(this.customerUrl, customer);
}
}


