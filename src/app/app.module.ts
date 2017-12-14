import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ROUTING
import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { QuarterComponent } from './quarter/quarter.component';
import { WoodService } from './resources/WoodService';
import { MeatService } from './resources/MeatService';
import { GoldService } from './resources/GoldService';
import { MarketComponent } from './market/market.component';
import { ArmyComponent } from './army/army.component';
import { ArmoryComponent } from './armory/armory.component';
import { TownhallComponent } from './townhall/townhall.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    QuarterComponent,
    MarketComponent,
    ArmyComponent,
    ArmoryComponent,
    TownhallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WoodService,
    MeatService,
    GoldService,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [WoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
