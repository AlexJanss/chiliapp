import { Component, OnInit } from '@angular/core';
import { Chili } from '../chili';
import { CHILIS } from '../mock-chilis';

@Component({
  selector: 'app-chilis',
  templateUrl: './chilis.component.html',
  styleUrls: ['./chilis.component.css']
})

export class ChilisComponent implements OnInit {

  chilis = CHILIS;
  selectedChili: Chili;
  onSelect(chili: Chili): void {
  this.selectedChili = chili;
}
  constructor() { }

  ngOnInit() {
  }

}
