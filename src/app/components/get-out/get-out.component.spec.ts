import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOutComponent } from './get-out.component';

describe('GetOutComponent', () => {
  let component: GetOutComponent;
  let fixture: ComponentFixture<GetOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
