import { RouterModule, Routes } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { planet } from '../planet';
import { PlanetsDetailComponent } from '../planets-detail/planets-detail.component';

const appRoutes: Routes = [
  { path: 'planet-detail', component: PlanetsDetailComponent },
];
@Component({
  selector: 'app-planetlistitem',
  templateUrl: './planetlistitem.component.html',
  styleUrls: ['./planetlistitem.component.css']
})
export class PlanetlistitemComponent implements OnInit {

  @Input()
  planet: planet;
  constructor(public planetsServiceService:PlanetsServiceService) { }

  ngOnInit() {
  }

}
