import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ScrollableItemsComponent } from './scrollable-items/scrollable-items.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ScrollableItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
