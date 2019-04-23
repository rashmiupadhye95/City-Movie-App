import { Component, OnInit } from '@angular/core';
import CustomerService from '../customer.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router, private camera: Camera, 
    public loadingController: LoadingController,
    public alertController: AlertController,) { }
  //customer = {name:'',password:'', address:'', email:'', phone:''};
customer: any={};
  ngOnInit() {
    this.customerService.getRemoteCustomers().subscribe((result) => {this.customers = result;}); 
  }
customers = [];
  doLogin(customer){
    for(var i=0;i<this.customers.length;i++){
      if((customer.email==this.customers[i].email) && (customer.password==this.customers[i].password)) {
        this.router.navigate(['list-movies']);
          this.presentLoadingWithOptions();
          break;
      }
      else{
            // this.presentAlert();
            
      }
    }
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Incorrect Email/Password',
      message: 'Please check your Email or Password and Try Again',
      buttons: ['OK']
    });

    await alert.present();
  }
}
