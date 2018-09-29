function MenuConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.menu', {
    url: '/menu',
    controller: 'MenuCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'menu/menu.html',
    title: 'Menu'
  });

};

export default MenuConfig;
