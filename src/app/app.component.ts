import { Component } from '@angular/core';
import { AppConfig } from './core/constant/appConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = AppConfig.AppName;
}
