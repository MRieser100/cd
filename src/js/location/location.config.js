function LocationConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.location', {
    url: '/location',
    controller: 'LocationCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'location/location.html',
    title: 'Location'
  });

};

export default LocationConfig;
