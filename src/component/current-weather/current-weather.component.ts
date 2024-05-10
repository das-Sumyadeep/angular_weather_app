import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherSearchService } from '../../services/weather-search.service';
import { format, compareAsc } from "date-fns";

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.scss',
})
export class CurrentWeatherComponent implements OnChanges {

  private weatherService = inject(WeatherSearchService);
  @Input() searchCity: string = "";
  currentData: any;
  currentDate: any;
  is_day: any;
  date: any;
  len: any;

  constructor() {
    this.fetchCurrentData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.fetchCurrentData();
  }

  fetchCurrentData() {

    return this.weatherService.getCurrentData()
      .subscribe((data) => {
        this.currentData = data;
        this.currentDate = format(this.currentData.location.localtime, "MMM d, y, h:mm");
        this.len = this.currentData.location.localtime.length;
        this.date = this.currentData.location.localtime[this.len - 5] + this.currentData.location.localtime[this.len - 4];
        if (this.date >= 12) {
          this.is_day = 1;
        }else{
          this.is_day = 0;
        }
        // console.log(this.date);
      })

  }

}
