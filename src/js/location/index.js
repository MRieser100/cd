import angular from 'angular';

// Create the module where our functionality can attach to
let locationModule = angular.module('app.location', []);

// Include our UI-Router config settings
import LocationConfig from './location.config';
locationModule.config(LocationConfig);


// Controllers
import LocationCtrl from './location.controller';
locationModule.controller('LocationCtrl', LocationCtrl);


export default locationModule;
