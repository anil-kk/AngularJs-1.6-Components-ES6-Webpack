export default class AirportSelectorController {
    constructor($state){
        'ngInject';
        this.$state = $state;
        this.filteredAirports = [];
        this.userInput ="";
    }
    
    $onInit(){
        this.filteredAirports = this.airports;
    }

    updateAirports(userInput){
        this.showDropdown =true;
        this.filteredAirports = this.airports.filter( (airport, index, airports) => {
            return airport.name.toLowerCase().startsWith(userInput);
        });
    }

    isAirportSelected(){
        if(this.selectedAirport){
            return true;
        }
        return false;
    }

    airportSelected(selectedAirport){
        this.selectedAirport = selectedAirport;
        this.userInput ="";
        this.showDropdown = false;
        this.onAirportSelected({$event:{selectedAirport}});
    }
}


