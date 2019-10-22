import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { planet } from '../planet';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  constructor(public planetsServiceService:PlanetsServiceService) { }

  ngOnInit() {
  }

}
