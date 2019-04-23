import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MovieService from '../movie.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {

  constructor(private router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;}); 
  }
  movies = [];
  paymentDone(){
    this.router.navigate(['payment-done']);
  }
  goBack(movie){
    this.router.navigate(['booking/'+movie.id]);
  }

}
