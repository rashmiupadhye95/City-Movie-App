import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service'
import BookingService from '../booking.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
declare var RazorpayCheckout: any;


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private movieService: MovieService, 
    private router: Router, private bookingService: BookingService
    , private route: ActivatedRoute, public alertController: AlertController) { }
  id: number;
  private sub: any;
  movie:any = {};
  ngOnInit() {
  	 this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       this.movieService.getRemoteMovieById(this.id).
       subscribe((movie)=>{this.movie = movie;});
    });
  }

  doPayment(){
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_G9tTuRXdQxhKu2',
      ////order_id: 'order_7HtFNLS98dSj8x//rzp_test_wScHehratCnaID',
      amount: '1000',
      name: '',
      prefill: {
        email: '',
        contact: '',
        name: ''
      },
      theme: {
        color: '#F37254'
      }
    }
    
    var successCallback = function(success) {
      //alert('payment_id: ' + success.razorpay_payment_id)
      var orderId = success.razorpay_order_id
      var signature = success.razorpay_signature
    }
    
    var cancelCallback = function(error) {
      alert(error.description + ' (Error '+error.code+')')
    }
    
    RazorpayCheckout.on('payment.success', successCallback)
    RazorpayCheckout.on('payment.cancel', cancelCallback)
    RazorpayCheckout.open(options);
    this.router.navigate(['payment-done']);
  }

  offersPage(){
    this.router.navigate(['/offers']);
  }

  goBack(){
    this.router.navigate(['/list-movies']);
  }

  /*sbookTicket(booking){
    this.bookingService.addRemoteBooking(this.booking).
    subscribe(() => this.router.navigate(['/payment']));
    console.log(JSON.stringify(booking));

  }*/
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  
}


