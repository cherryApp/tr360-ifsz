import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  list: Observable<any> = this.weatherService.read();

  constructor(
    private weatherService: WeatherService
  ) { }

  getObjectKeys(object): {key: string, title: string}[] {
    let weather: Weather = new Weather();
    let columns = [];
    for (let k in weather) {
      columns.push( {key: k, title: k} );
    }
    return columns;
  }

  ngOnInit() {
    this.weatherService.read().subscribe(
      weatherList => console.log(weatherList)
    );
  }

  onCreate(row: Weather): void {
    this.weatherService.create(row);
  }

}
