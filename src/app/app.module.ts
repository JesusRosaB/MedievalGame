import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ResourceComponent} from './Resources/resource.component';
import {EdificiosComponent} from './Edificios/Edificios.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    EdificiosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
