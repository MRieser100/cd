function RestaurantServicesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.restaurant-services', {
    url: '/restaurant-services',
    controller: 'RestaurantServicesCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'restaurant-services/restaurant-services.html',
    title: 'Services'
  });

};

export default RestaurantServicesConfig;
