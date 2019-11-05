import { Component, OnInit,Input } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { planet } from '../planet';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  @Input()
  planet: planet;
  constructor(public planetsServiceService:PlanetsServiceService) { }

  ngOnInit() {
  }
  removeplanetfromservice(planet){
    this.planetsServiceService.removeplanet(planet)
  }
  editplanetinservice(planet,change :string){
    this.planetsServiceService.editplanet(planet,change)
  }

}
