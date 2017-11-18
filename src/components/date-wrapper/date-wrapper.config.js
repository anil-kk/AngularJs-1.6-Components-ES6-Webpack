import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import { DateWrapperComponent } from './date-wrapper.component';

export const dateWrapperModule = angular.module('dateWrapperModule', [
    uiRouter
  ])
  .component('dateWrapper', DateWrapperComponent)
  .config(($stateProvider) => {
    'ngInject';
    $stateProvider
    .state('home.flights.destination', {
        url: '/{destinationIataCode}',
        views: {
          "date@home": {
            component:'dateWrapper'
          }
        },
        resolve:{  
          destinationIataCode:($stateParams) => {
            return $stateParams.destinationIataCode;
          } ,
          originIataCode:($stateParams) => {
            return $stateParams.originIataCode;
          }
        }
      })     
})
.name;