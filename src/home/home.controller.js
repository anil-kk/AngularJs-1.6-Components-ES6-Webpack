export default class HomeController {
    constructor($state){
        'ngInject';
        this.$state = $state;
    }
    
    originSelected({selectedAirport}){
       this.$state.go("home.flights", {originIataCode: selectedAirport.iataCode});
    }
}