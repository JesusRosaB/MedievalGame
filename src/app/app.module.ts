import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
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
import { CollectorsComponent } from './collectors/collector.component';
import { CollectorsService } from './collectors/collectorsService';
import { TimerService } from './timer/timer.service';
import {TroopTypeComponent} from './quarter/troopType.component';
import {EventsService} from './events/events.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {CarouselModule, MessageModule, MessagesModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EventsComponent} from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    QuarterComponent,
    MarketComponent,
    ArmyComponent,
    ArmoryComponent,
    TownhallComponent,
    CollectorsComponent,
    TroopTypeComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    APP_ROUTING,
    CarouselModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule
  ],
  providers: [
    WoodService,
    MeatService,
    GoldService,
    CollectorsService,
    TimerService,
    EventsService,
    MessageService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
