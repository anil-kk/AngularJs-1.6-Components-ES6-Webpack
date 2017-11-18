import template from './date-selector.component.html';
import controller from './date-selector.controller';

export const DateSelectorComponent = {
  bindings: {
    date: '<',
    onDateChange:'&'
  },
  template,
  controller 
};
