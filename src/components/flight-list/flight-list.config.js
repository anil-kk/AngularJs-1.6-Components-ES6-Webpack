import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { FlightListComponent } from './flight-list.component';

export const flightListModule = angular.module('flightListModule', [
    uiRouter
  ])
  .component('flightList', FlightListComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
    .state('home.flights.destination.flightlist', {
        url: '/{startDate}/{endDate}',
        views: {
          "flightlist@home": {
            component:'flightList',
          }
        },
        resolve: {
          cheapFlights: ($stateParams, CheapFlightService) => {
           return CheapFlightService
            .getCheapFlights($stateParams.originIataCode, $stateParams.destinationIataCode,$stateParams.startDate,$stateParams.endDate)
            .then((response) => response.data);  
          },
          selectedAirports: ($stateParams, airportsData) => {
            const route = [$stateParams.originIataCode, $stateParams.destinationIataCode];

            const filteredAirports = airportsData.airports.filter(function(airport, index, airports){
              return route.includes(airport.iataCode);
            });            
            const origin = filteredAirports.filter( (airport, index, airports) => {
              return airport.iataCode.startsWith($stateParams.originIataCode);
            });
            const destination = filteredAirports.filter( (airport, index, airports) => {
              return airport.iataCode.startsWith($stateParams.destinationIataCode);
            });
            return {
              origin: origin[0],
              destination: destination[0]     
            };            
          },
          dates: ($stateParams) => {
            return{
                startDate: $stateParams.startDate,
                endDate: $stateParams.endDate
            };
        }
    }
  })
})
.name;