import { Component } from '@angular/core';
import { Collegue } from './models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'top-collegues';
  collegueFictif:Collegue={ photoURL:"une magnifique photo",pseudo:"beber",score:100}
}
