import { Component,  Input } from '@angular/core';
import { Chili } from '../chili';

@Component({
  selector: 'app-chili-detail',
  templateUrl: './chili-detail.component.html',
  styleUrls: ['./chili-detail.component.css']
})
export class ChiliDetailComponent {
  @Input() chili: Chili;
  constructor() { }

}
