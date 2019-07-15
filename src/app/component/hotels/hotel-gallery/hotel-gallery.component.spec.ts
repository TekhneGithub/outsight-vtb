import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelGalleryComponent } from './hotel-gallery.component';

describe('HotelGalleryComponent', () => {
  let component: HotelGalleryComponent;
  let fixture: ComponentFixture<HotelGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
