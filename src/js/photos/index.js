import angular from 'angular';

// Create the module where our functionality can attach to
let photosModule = angular.module('app.photos', []);

// Include our UI-Router config settings
import PhotosConfig from './photos.config';
photosModule.config(PhotosConfig);


// Controllers
import PhotosCtrl from './photos.controller';
photosModule.controller('PhotosCtrl', PhotosCtrl);


export default photosModule;
