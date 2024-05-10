import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from "../component/current-weather/current-weather.component";
import { ForecastWeatherComponent } from "../component/forecast-weather/forecast-weather.component";
import { SearchComponent } from "../component/search/search.component";
import { WeatherSearchService } from '../services/weather-search.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, CurrentWeatherComponent, ForecastWeatherComponent, SearchComponent]
})
export class AppComponent {
  title = 'weather-project';

  constructor(public weatherService: WeatherSearchService){};
}
