import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesWearComponent } from './ladies-wear.component';

describe('LadiesWearComponent', () => {
  let component: LadiesWearComponent;
  let fixture: ComponentFixture<LadiesWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadiesWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
