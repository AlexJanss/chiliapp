import { Component, OnInit, Input } from '@angular/core';
import { Chili } from '../chili';

@Component({
  selector: 'app-chili-detail',
  templateUrl: './chili-detail.component.html',
  styleUrls: ['./chili-detail.component.css']
})
export class ChiliDetailComponent implements OnInit {
  @Input() chili: Chili;
  constructor() { }

  ngOnInit() {
  }

}
