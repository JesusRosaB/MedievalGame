import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { QuarterComponent } from './quarter/quarter.component';
import {WoodService} from './resources/WoodService';
import {MeatService} from './resources/MeatService';
import {GoldService} from './resources/GoldService';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    QuarterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WoodService,
    MeatService,
    GoldService
  ],
  providers: [WoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
