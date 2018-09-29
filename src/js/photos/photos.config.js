function PhotosConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.photos', {
    url: '/photos',
    controller: 'PhotosCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'photos/photos.html',
    title: 'Photos'
  });

};

export default PhotosConfig;
