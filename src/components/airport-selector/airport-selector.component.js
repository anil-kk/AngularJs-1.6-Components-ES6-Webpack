import template from './airport-selector.component.html';
import controller from './airport-selector.controller';

export const AirportSelectorComponent = {
  bindings: {
    componentName:'<',
    place: '<',
    airports: '<',
    onAirportSelected:'&'
  },
  template,
  controller
};