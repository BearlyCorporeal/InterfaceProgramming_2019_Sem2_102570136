import { Component, OnInit,Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap,RouterModule} from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public planetsServiceService:PlanetsServiceService) { }

  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.planet = this.planetsServiceService.getplanet(name);
    console.log("this is when this happens")
  }
  removeplanetfromservice(planet){
    this.planetsServiceService.removeplanet(planet)
  }
  editplanetinservice(planet,change :string){
    this.planetsServiceService.editplanet(planet,change)
  }
}
