import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  trendingMovies: any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http: HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies() {
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)  => {
      this.trendingMovies = movies;

      console.log(this.trendingMovies);
    });
  }

  getTheatreMovies() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies)  => {
      this.theatreMovies = movies;

      console.log(this.theatreMovies);
    });
  }

  getPopularMovies() {
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)  => {
      this.popularMovies = movies;
    });
  }

  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id])
  }
}
