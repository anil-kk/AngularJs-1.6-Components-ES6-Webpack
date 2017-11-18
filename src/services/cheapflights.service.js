export const CheapFlightService = ($http) => {
  'ngInject';
  return {
    getCheapFlights: function(originCode, destinationCode, startDate, endDate) {
      const url =`https://murmuring-ocean-10826.herokuapp.com/en/api/2/flights/from/${originCode}/to/${destinationCode}/
      ${startDate}/${endDate}/250/unique/?limit=15&offset-0`;
      return $http.get(url);
     }
    }
};
