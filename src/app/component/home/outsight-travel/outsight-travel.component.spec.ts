import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsightTravelComponent } from './outsight-travel.component';

describe('OutsightTravelComponent', () => {
  let component: OutsightTravelComponent;
  let fixture: ComponentFixture<OutsightTravelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsightTravelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsightTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
