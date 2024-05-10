import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class WeatherSearchService {

  constructor() { }

  public searchCity: string = "Guwahati";

  private http = inject(HttpClient);

  getCurrentData(){

    return this.http.get(`${environment.baseUrl}/current.json?key=${environment.apiKey}&q=${this.searchCity}`)
  }
  getForecastData(){

    return this.http.get(`${environment.baseUrl}/forecast.json?key=${environment.apiKey}&q=${this.searchCity}&days=4`)
  }
  getSearchData(city: any){

    return this.http.get(`${environment.baseUrl}/search.json?key=${environment.apiKey}&q=${city}`)
  }
}
