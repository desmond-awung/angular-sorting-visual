import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalBarComponent } from './components/vertical-bar/vertical-bar.component';
import { ArrayOfBarsComponent } from './components/array-of-bars/array-of-bars.component';
import { SortingComponent } from './components/sorting/sorting.component';



@NgModule({
  declarations: [VerticalBarComponent, ArrayOfBarsComponent, SortingComponent],
  imports: [
    CommonModule
  ],
  // what needs to be exported to the root module (AppModule)
  exports: [
    SortingComponent,
    // VerticalBarComponent,
    // ArrayOfBarsComponent,
  ]
})
export class SortingModule { }
