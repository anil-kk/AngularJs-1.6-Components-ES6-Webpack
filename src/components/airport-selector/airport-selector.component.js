import template from './airport-selector.component.html';
import controller from './airport-selector.controller';
import './airport-selector.component.scss';
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