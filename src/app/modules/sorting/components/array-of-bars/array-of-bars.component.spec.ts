import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayOfBarsComponent } from './array-of-bars.component';

describe('ArrayOfBarsComponent', () => {
  let component: ArrayOfBarsComponent;
  let fixture: ComponentFixture<ArrayOfBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayOfBarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayOfBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
