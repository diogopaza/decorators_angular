import { Component } from '@angular/core';
import { Environment } from './decorators/environment.decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @Environment('title')
  title
}
