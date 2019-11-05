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
  removeplanet(planet) {
    var index = this.planets.indexOf(planet);
    this.planets.splice(index, 1);
  }
  editplanet(planet,change:string){
    var index = this.planets.indexOf(planet);
    planet.name= change
  }
}
