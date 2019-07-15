import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryinfoComponent } from './galleryinfo.component';

describe('GalleryinfoComponent', () => {
  let component: GalleryinfoComponent;
  let fixture: ComponentFixture<GalleryinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
