import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingVisualComponent } from './sorting-visual.component';

describe('SortingVisualComponent', () => {
  let component: SortingVisualComponent;
  let fixture: ComponentFixture<SortingVisualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingVisualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
