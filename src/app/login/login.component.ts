import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }
  //customer = {name:'',password:'', address:'', email:'', phone:''};
customer: any={};
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;}); 
  }
customers = [];
  doLogin(customer){
    for(var i=0;i<this.customers.length;i++){
      if((customer.email==this.customers[i].email) && (customer.password==this.customers[i].password)) {
        if(localStorage.getItem('user') == null){
          localStorage.setItem('user', JSON.stringify(customer));
        }
          this.router.navigate(['list-movies']);
          break;
      }
      else{
        
      }
    }
  }
}
