import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

// ROUTING
import { APP_ROUTING } from './app-routing.module';

import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { QuarterComponent } from './quarter/quarter.component';
import { WoodService } from './resources/WoodService';
import { MeatService } from './resources/MeatService';
import { GoldService } from './resources/GoldService';
import { MarketComponent } from './market/market.component';
import { ArmyComponent } from './quarter/army.component';
import { ArmoryComponent } from './armory/armory.component';
import { TownhallComponent } from './townhall/townhall.component';
import { CollectorsComponent } from './collectors/collector.component';
import { CollectorsService } from './collectors/collectorsService';
import { TimerService } from './timer/timer.service';
import {EventsService} from './events/events.service';
import {MessagesComponent} from './messages/messages.component';
import {MessagesService} from './messages/messages.service';
import {Exception} from './exceptions/Exception';
import {QuarterService} from './quarter/quarter.service';
import {ArmyService} from './quarter/army.service';
import {ListaTrabajos} from './quarter/listaTrabajos';
import {TownhallService} from './townhall/townhall.service';
import { LevelUpBuildingService } from './buildings/levelUpBuilding.service';
import { QuestHallComponent } from './questhall/questhall.component';
import { QuestHallService } from './questhall/questhall.service';
import {DatabaseService} from './baseDeDatos/database.service';
import {MarketService} from './market/market.service';
import {ArmoryService} from './armory/armory.service';
import {DatabaseResourceService} from './baseDeDatos/databaseResource.service';


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
    MessagesComponent,
    QuestHallComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    APP_ROUTING
  ],
  providers: [
    WoodService,
    MeatService,
    GoldService,
    CollectorsService,
    TimerService,
    EventsService,
    MessagesService,
    {provide: ErrorHandler, useClass: Exception},
    QuarterService,
    ArmyService,
    ListaTrabajos,
    TownhallService,
    LevelUpBuildingService,
    QuestHallService,
    DatabaseService,
    MarketService,
    ArmoryService,
    DatabaseResourceService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
