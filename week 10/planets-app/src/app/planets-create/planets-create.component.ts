import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {

  
  constructor(public planetsServiceService:PlanetsServiceService) {

  }

  ngOnInit() {
    this.planetsServiceService.addplanets("asd", 1, 1);
  }
  addplanetstoservice(name: string, moons: number, distancefromSun: number){
    this.planetsServiceService.addplanets(name,moons,distancefromSun);
  }

}
