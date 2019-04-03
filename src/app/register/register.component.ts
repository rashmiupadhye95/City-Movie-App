import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  customer = {id:0, name:'',password:'', address:'', email:'', phone:''};
    

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {}
   
  
  /*addCustomer(customer){
    this.customerService.addCustomer(customer);
    customer = this.customerService.getCustomers();
    this.router.navigate(['/list-customer']);
  }*/
  addCustomer(customer){
    this.customerService.addRemoteCustomer(this.customer).
    subscribe(() => this.router.navigate(['/list-movies']))
  }

}
