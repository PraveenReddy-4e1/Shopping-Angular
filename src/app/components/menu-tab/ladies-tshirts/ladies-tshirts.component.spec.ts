import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesTshirtsComponent } from './ladies-tshirts.component';

describe('LadiesTshirtsComponent', () => {
  let component: LadiesTshirtsComponent;
  let fixture: ComponentFixture<LadiesTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadiesTshirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
