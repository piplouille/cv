import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvServicesComponent } from './cv-services.component';

describe('CvServicesComponent', () => {
  let component: CvServicesComponent;
  let fixture: ComponentFixture<CvServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
