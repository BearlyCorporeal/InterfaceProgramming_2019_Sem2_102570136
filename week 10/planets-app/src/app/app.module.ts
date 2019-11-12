import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { PlanetsCreateComponent } from './planets-create/planets-create.component';
import { PlanetsDetailComponent } from './planets-detail/planets-detail.component';
import { PlanetlistitemComponent } from './planetlistitem/planetlistitem.component';

const appRoutes: Routes = [
  { path: 'create', component: PlanetsCreateComponent },
  { path: 'planet-list', component: PlanetsListComponent },
  { path: 'planet-detail', component: PlanetsDetailComponent },

  { path: '**', component: PlanetsCreateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    PlanetsCreateComponent,
    PlanetsDetailComponent,
    PlanetlistitemComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
