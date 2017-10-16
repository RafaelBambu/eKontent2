import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SlickModule } from 'ngx-slick';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    SlickModule.forRoot(),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
