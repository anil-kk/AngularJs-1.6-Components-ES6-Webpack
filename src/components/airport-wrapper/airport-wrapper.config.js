import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { AirportWrapperComponent } from './airport-wrapper.component';

export const airportWrapperModule = angular.module('airportWrapperModule', [
    uiRouter
  ])
  .component('airportWrapper', AirportWrapperComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
    .state('home.flights', {
        url: 'flights/{originIataCode}',
        component:'airportWrapper',
        resolve:{  
          destinationAirports: ($stateParams, airportsData) => {
            const route = airportsData.routes[$stateParams.originIataCode];
            const destinationAirports = airportsData.airports.filter(function(airport, index, airports){
              return route.includes(airport.iataCode);
           });
            return destinationAirports;
          }              
        }
      })
})
.name;