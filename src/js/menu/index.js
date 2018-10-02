import angular from 'angular';

// Create the module where our functionality can attach to
let menuModule = angular.module('app.menu', []);

// Include our UI-Router config settings
import MenuConfig from './menu.config';
menuModule.config(MenuConfig);


// Controllers
import MenuCtrl from './menu.controller';
menuModule.controller('MenuCtrl', MenuCtrl);

import MenuDisplayCtrl from './menu-display-controller';
menuModule.controller('MenuDisplayCtrl', MenuDisplayCtrl);

export default menuModule;
