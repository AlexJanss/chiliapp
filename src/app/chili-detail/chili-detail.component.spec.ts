import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiliDetailComponent } from './chili-detail.component';

describe('ChiliDetailComponent', () => {
  let component: ChiliDetailComponent;
  let fixture: ComponentFixture<ChiliDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiliDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiliDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
