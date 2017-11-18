import moment from 'moment';

export default class DateWrapperController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
  }

  startDateChanged({date}) {
    if(date) {
      this.startDate = date;
      if(moment(this.startDate) > moment(this.endDate)) {
        this.endDate = moment(this.startDate).add(2, 'd').toDate();
        this.$state.go("home.flights.destination.flightlist", this.getParams());
      }
    }
  }
  endDateChanged({date}) {
    if(date) {
      this.endDate = date;
      if(moment(this.endDate) < moment(this.startDate)) {
        this.startDate = moment(this.endDate).subtract(2, 'd').toDate();
      }
      this.$state.go("home.flights.destination.flightlist", this.getParams());
    }
  }
  getParams() {
    return {
      origin: this.originIataCode,
      destination: this.destinationIataCode,
      startDate: this.getDate(this.startDate),
      endDate: this.getDate(this.endDate)
    }
  }
  getDate(date) {
    return date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + (date.getUTCDate() + 1);
  }
}