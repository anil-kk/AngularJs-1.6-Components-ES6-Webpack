export default class AirportWrapperController{
    constructor($state){
        'ngInject';
        this.$state = $state;
    }
    destinationSelected({selectedAirport}){
        this.$state.go("home.flights.destination", {destinationIataCode: selectedAirport.iataCode});
    }            
}
