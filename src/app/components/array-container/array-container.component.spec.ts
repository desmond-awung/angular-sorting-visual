import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayContainerComponent } from './array-container.component';

describe('ArrayContainerComponent', () => {
  let component: ArrayContainerComponent;
  let fixture: ComponentFixture<ArrayContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
