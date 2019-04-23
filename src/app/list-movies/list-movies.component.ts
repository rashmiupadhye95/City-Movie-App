import { Component, OnInit } from '@angular/core';
import MovieService from '../movie.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
})
export class ListMoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private router: Router, ) { }
  ngOnInit() {
    this.movieService.getRemoteMovies().subscribe((result) => {this.movies = result;}); 
  }
  movies = [];
  
  doBooking(movie){
    this.router.navigate(['/booking/'+movie.id]);
  }

  creatingBooking(movie){
    this.router.navigate(['/booking/'+movie.id]);
  }


  logout(){
    this.router.navigate(['login']);
  }

}
