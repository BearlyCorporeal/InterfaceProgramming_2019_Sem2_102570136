import { Component, OnInit } from '@angular/core';
import { PlanetsServiceService } from '../planets-service.service';
import { planet } from '../planet';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

  constructor(public planetsServiceService:PlanetsServiceService) { }

  ngOnInit() {
  }

}
