import angular from 'angular';

let componentsModule = angular.module('app.components', []);

// import ShowAuthed from './show-authed.directive';
// componentsModule.directive('showAuthed', ShowAuthed);

import MainNavbarLinks from './main-navbar-links.component';
componentsModule.component('mainNavbarLinks', MainNavbarLinks);

import GraphicPageHeader from './graphic-page-header.component';
componentsModule.component('graphicPageHeader', GraphicPageHeader);

export default componentsModule;
