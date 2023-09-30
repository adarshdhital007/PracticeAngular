import { Component, OnInit } from "@angular/core";
import { WeatherServiceService } from "../weather-service.service";
import { ActivatedRoute } from "@angular/router";
import { Observable, EMPTY } from "rxjs";
import { map, filter, concatMap, tap, catchError } from "rxjs/operators";

@Component({
  selector: "app-weather-report",
  templateUrl: "./weather-report.component.html",
  styleUrls: ["./weather-report.component.scss"]
})
export class WeatherReportComponent implements OnInit {
  data$: Observable<any>;

  today: Date = new Date();

  loading = false;

  constructor(
    private weatherService: WeatherServiceService,
    private route: ActivatedRoute
  ) {
    // Initialize data$ with an empty observable
    this.data$ = EMPTY;
  }

  ngOnInit() {
    this.data$ = this.route.params.pipe(
      map(params => params["cityName"]), // Use the correct parameter name
      filter(name => !!name),
      tap(() => {
        this.loading = true;
      }),
      concatMap(name => this.weatherService.getWeatherForCity(name).pipe(
        catchError(error => {
          console.error("Error fetching weather data:", error);
          return EMPTY;
        })
      )),
      tap(() => {
        this.loading = false;
      })
    );
  }
}
