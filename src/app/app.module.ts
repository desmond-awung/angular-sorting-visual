import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortingVisualComponent } from './components/sorting-visual/sorting-visual.component';
import { ArrayContainerComponent } from './components/array-container/array-container.component';
import { ArrayBarComponent } from './components/array-bar/array-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SortingVisualComponent,
    ArrayContainerComponent,
    ArrayBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
