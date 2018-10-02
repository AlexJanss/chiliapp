import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Chili } from './chili';
import { CHILIS } from './mock-chilis';



@Injectable({
  providedIn: 'root'
})
export class ChiliService {

  constructor() { }

  getChilis(): Observable<Chili[]> {
    return of(CHILIS);
  }
}
