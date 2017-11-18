import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngSanitize from 'angular-sanitize'
import { components } from './components/components';
import { HomeComponent } from './home/home.component';
import { AirportsService } from './services/airports.service';
import { CheapFlightService } from './services/cheapflights.service';
import './scss/main.scss';

angular.module('myApp', [
  uiRouter,
  ngSanitize,
  components
])
.component('homePage', HomeComponent)
.service('AirportsService', AirportsService)
.service('CheapFlightService', CheapFlightService)
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'homePage',
      resolve: {
        airportsData: (AirportsService) => AirportsService.getAirports().then((response) => response.data),
        airports: (airportsData) => {
          return airportsData.airports;
        }
      }
    });
});
