import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvIntroductionComponent } from './cv-introduction.component';

describe('CvIntroductionComponent', () => {
  let component: CvIntroductionComponent;
  let fixture: ComponentFixture<CvIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
