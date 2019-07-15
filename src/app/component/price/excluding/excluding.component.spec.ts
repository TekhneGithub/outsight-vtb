import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcludingComponent } from './excluding.component';

describe('ExcludingComponent', () => {
  let component: ExcludingComponent;
  let fixture: ComponentFixture<ExcludingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcludingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcludingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
