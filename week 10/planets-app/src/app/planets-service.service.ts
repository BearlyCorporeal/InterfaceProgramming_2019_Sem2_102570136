import { Injectable } from '@angular/core';
import { planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsServiceService {

  planets: planet[]=[];
  constructor() { }

  addplanets(name: string, moons: number, distancefromSun: number){
    this.planets.push(new planet(name,moons,distancefromSun))
    console.log(this.planets)
  }
}
