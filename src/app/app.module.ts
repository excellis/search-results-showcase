import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchResultsModule } from 'hani-npm-try';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SearchResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
