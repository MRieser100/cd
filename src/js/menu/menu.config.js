function MenuConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.menu', {
    // url: '/menu',
    abstract: true,
    views: {
      '': {
           controller: 'MenuCtrl',
           controllerAs: '$ctrl',
           templateUrl: 'menu/menu.html',
      }
    },    
  })
  .state('app.menu.view', {
    url: '/menu/:type',
    views: {
      'menu': {
        templateUrl: function ($stateParams) {
          let menuType = $stateParams.type;
          return `menu/types/${menuType}-menu.html`;
        },
        controller: 'MenuDisplayCtrl',
        controllerAs: '$ctrl'
      }
    },
    title: 'Menu'    
  })

};

export default MenuConfig;
