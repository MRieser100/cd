function PlaygroundConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.playground', {
    url: '/play',
    controller: 'PlaygroundCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'playground/playground.html',
    title: 'Playground'
  });

};

export default PlaygroundConfig;
