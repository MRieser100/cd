import angular from 'angular';

// Create the module where our functionality can attach to
let playgroundModule = angular.module('app.playground', []);

// Include our UI-Router config settings
import PlaygroundConfig from './playground.config';
playgroundModule.config(PlaygroundConfig);


// Controllers
import PlaygroundCtrl from './playground.controller';
playgroundModule.controller('PlaygroundCtrl', PlaygroundCtrl);


export default playgroundModule;
