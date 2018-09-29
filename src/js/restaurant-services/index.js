import angular from 'angular';

// Create the module where our functionality can attach to
let restaurantServicesModule = angular.module('app.restaurant-services', []);

// Include our UI-Router config settings
import RestaurantServicesConfig from './restaurant-services.config';
restaurantServicesModule.config(RestaurantServicesConfig);


// Controllers
import RestaurantServicesCtrl from './restaurant-services.controller';
restaurantServicesModule.controller('RestaurantServicesCtrl', RestaurantServicesCtrl);


export default restaurantServicesModule;
