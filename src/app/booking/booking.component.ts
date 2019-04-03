import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service'
import BookingService from '../booking.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router, private bookingService: BookingService
    , private route: ActivatedRoute) { }
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
    this.router.navigate(['/payment']);
  }

  offersPage(){
    this.router.navigate(['/offers']);
  }

  /*sbookTicket(booking){
    this.bookingService.addRemoteBooking(this.booking).
    subscribe(() => this.router.navigate(['/payment']));
    console.log(JSON.stringify(booking));

  }*/
}


