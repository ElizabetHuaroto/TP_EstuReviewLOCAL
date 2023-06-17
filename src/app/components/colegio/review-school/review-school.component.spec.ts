import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSchoolComponent } from './review-school.component';

describe('ReviewSchoolComponent', () => {
  let component: ReviewSchoolComponent;
  let fixture: ComponentFixture<ReviewSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
