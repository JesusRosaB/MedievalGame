import {Injectable} from "@angular/core";
import {WoodService} from "../resources/WoodService";
import {timerService} from "../timer.service";
/**
 * Created by jose on 16/12/17.
 */

@Injectable()
export class WoodCutterService{
  woodPerSecond;
  constructor(private Wood:WoodService, private timer:timerService){
    this.woodPerSecond=1;
    console.log("Llego constructor servicio");
    this.timer.resourcesTimer.subscribe(()=>Wood.increase(this.woodPerSecond));
  }
}
