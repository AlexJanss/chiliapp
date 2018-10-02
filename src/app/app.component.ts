import { Component } from '@angular/core';
import { Chili } from './chili';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chiliapp';

  selectedChili: Chili;

  getChili($event) {
    this.selectedChili = $event;
    
  }
}
