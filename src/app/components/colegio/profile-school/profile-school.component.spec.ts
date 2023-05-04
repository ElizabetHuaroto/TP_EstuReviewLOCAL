import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSchoolComponent } from './profile-school.component';

describe('ProfileSchoolComponent', () => {
  let component: ProfileSchoolComponent;
  let fixture: ComponentFixture<ProfileSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
