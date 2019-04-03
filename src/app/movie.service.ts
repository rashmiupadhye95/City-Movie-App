import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class MovieService {
  movies=[];
  private movieUrl = 'http://192.168.0.93:3000/api/movies';
  
  constructor(private http: HttpClient) { }

  getRemoteMovies(): Observable<[]>{
    return this.http.get<[]>(this.movieUrl); 		
  }
  
getRemoteMovieById(id):Observable<any>{
  return this.http.get<[]>(this.movieUrl + "/"+id);
 }
 

}
