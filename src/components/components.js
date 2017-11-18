import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { DateWrapperComponent } from './date-wrapper/date-wrapper.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';

import { AirportSelectorComponent } from './airport-selector/airport-selector.component';
import { airportWrapperModule } from './airport-wrapper/airport-wrapper.config';
import { dateWrapperModule } from './date-wrapper/date-wrapper.config';
import { flightListModule } from './flight-list/flight-list.config';

export const components = angular.module('app.components', [
  uiRouter,
  airportWrapperModule,
  dateWrapperModule,
  flightListModule
])
.component('dateSelector', DateSelectorComponent)
.component('airportSelector', AirportSelectorComponent)
.name;




