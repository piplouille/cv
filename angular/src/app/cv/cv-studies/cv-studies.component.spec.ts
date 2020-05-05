import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvStudiesComponent } from './cv-studies.component';

describe('CvStudiesComponent', () => {
  let component: CvStudiesComponent;
  let fixture: ComponentFixture<CvStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
