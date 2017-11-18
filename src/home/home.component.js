import template from './home.component.html';
import controller from './home.controller';
import './home.component.scss';

export const HomeComponent = {
  bindings: {
    airports:'<'
  },
  template,
  controller
};
