import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Chili } from '../chili';
import { ChiliService } from '../chili.service';

@Component({
  selector: 'app-chilis',
  templateUrl: './chilis.component.html',
  styleUrls: ['./chilis.component.css']
})

export class ChilisComponent implements OnInit{
  @Output() chiliSelect: EventEmitter<any> = new EventEmitter();
  selectedChili: Chili;
  chilis: Chili[];

  constructor(private chiliService: ChiliService) { }

  ngOnInit() {
    this.getChilis();
  }

  onSelect(chili: Chili): void {
  this.selectedChili = chili;
  this.chiliSelect.emit(this.selectedChili);
}

getChilis(): void {
  this.chiliService.getChilis().subscribe(chilis => this.chilis = chilis);
}

 

}
