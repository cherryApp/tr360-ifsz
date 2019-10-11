import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.weatherService.read().subscribe(
      weatherList => console.log(weatherList)
    );
  }

}
