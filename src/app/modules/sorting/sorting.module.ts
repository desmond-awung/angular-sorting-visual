import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { ArrayOfBarsComponent } from './components/array-of-bars/array-of-bars.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { ControlsComponent } from './components/controls/controls.component';



@NgModule({
  declarations: [VerticalBarComponent, ArrayOfBarsComponent, SortingComponent, ControlsComponent],
  imports: [
    CommonModule
  ],
  // what needs to be exported to the root module (AppModule)
  exports: [
    SortingComponent,
  ]
})
export class SortingModule { }
