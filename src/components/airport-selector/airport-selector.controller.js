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
        this.showDropdown = true;
        this.filteredAirports = this.airports.filter( (airport, index, airports) => {
            return airport.name.toLowerCase().startsWith(userInput.toLowerCase());
        });
    }

    onInputFocus(){
        this.selectedAirport = null;
        this.updateAirports(this.userInput);
    }

    airportSelected(selectedAirport){
        this.selectedAirport = selectedAirport;
        this.userInput = selectedAirport.name;
        this.showDropdown = false;
        this.onAirportSelected({$event:{selectedAirport}});
    }
}


