import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { WeatherSearchService } from '../../services/weather-search.service';
import { format, compareAsc } from "date-fns";

@Component({
  selector: 'app-forecast-weather',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './forecast-weather.component.html',
  styleUrl: './forecast-weather.component.scss'
})
export class ForecastWeatherComponent implements OnChanges {

  private weatherService = inject(WeatherSearchService);
  foreCast: any[] = [];
  currDate: string[] = [];
  foreCastData: any;
  @Input() searchCity: string = "";

  constructor() {
    this.fetchForecastData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.searchCity);
    this.fetchForecastData();
  }

  fetchForecastData() {

    return this.weatherService.getForecastData()
      .subscribe((data) => {
        this.foreCastData = data;
        for (let i = 1; i < this.foreCastData.forecast.forecastday.length; i++) {
          this.foreCast[i - 1] = this.foreCastData.forecast.forecastday[i];
        }
        for (let x of this.foreCast) {
          this.currDate.push(format(x.date, "MMM d, y"));
        }
        // console.log(this.foreCast);
      })
  }
}
