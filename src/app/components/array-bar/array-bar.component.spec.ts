import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayBarComponent } from './array-bar.component';

describe('ArrayBarComponent', () => {
  let component: ArrayBarComponent;
  let fixture: ComponentFixture<ArrayBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
