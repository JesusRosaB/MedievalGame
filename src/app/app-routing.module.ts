import { Routes, RouterModule } from '@angular/router';
import { QuarterComponent } from './quarter/quarter.component';
import { ResourcesComponent } from './resources/resources.component';
import { MarketComponent } from './market/market.component';
import { ArmyComponent } from './quarter/army.component';
import { ArmoryComponent } from './armory/armory.component';
import { TownhallComponent } from './townhall/townhall.component';
import { CollectorsComponent } from './collectors/collector.component';
import { MessagesComponent } from './messages/messages.component';

const APP_ROUTES: Routes = [
  { path: 'mensajes', component: MessagesComponent },
  { path: 'cuartel', component: QuarterComponent },
  { path: 'recursos', component: ResourcesComponent },
  { path: 'mercado', component: MarketComponent },
  { path: 'ejercito', component: ArmyComponent },
  { path: 'armeria', component: ArmoryComponent },
  { path: 'ayuntamiento', component: TownhallComponent },
  { path: 'recolectores', component: CollectorsComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''} // Redirige a la pagina principal si encuentra algun error o pagina no encontrada
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
