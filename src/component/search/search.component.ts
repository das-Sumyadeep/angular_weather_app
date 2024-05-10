import { Component, inject } from '@angular/core';
import { WeatherSearchService } from '../../services/weather-search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  private weatherService = inject(WeatherSearchService);
  searchVal: any;
  weatherVal: any;

  constructor(){}

  searchData(city: any) {
    this.weatherService.getSearchData(city).subscribe((data) => {
      this.searchVal = data;
      this.weatherVal = this.searchVal[0];
      this.weatherService.searchCity = this.weatherVal.name;
        // console.log(this.weatherVal.name);
      })
  }
}
