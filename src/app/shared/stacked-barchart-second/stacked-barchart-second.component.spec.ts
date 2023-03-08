import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedBarchartSecondComponent } from './stacked-barchart-second.component';

describe('StackedBarchartSecondComponent', () => {
  let component: StackedBarchartSecondComponent;
  let fixture: ComponentFixture<StackedBarchartSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackedBarchartSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackedBarchartSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
