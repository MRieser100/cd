class AppHeaderCtrl {
  constructor(AppConstants) {
    'ngInject';

    this.appName = AppConstants.appName;
    this.collapsed = true;

    // this.currentUser = User.current;

    // $scope.$watch('User.current', (newUser) => {
    //   this.currentUser = newUser;
    // })
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}

let AppHeader = {
  controller: AppHeaderCtrl,
  templateUrl: 'layout/header.html'
};

export default AppHeader;
