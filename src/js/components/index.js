import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// import ShowAuthed from './show-authed.directive';
// componentsModule.directive('showAuthed', ShowAuthed);

import MainNavbarLinks from './main-navbar-links.component';
componentsModule.component('mainNavbarLinks', MainNavbarLinks);

export default componentsModule;
