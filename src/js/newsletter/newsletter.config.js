function NewsletterConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.newsletter', {
    url: '/newsletter',
    controller: 'NewsletterCtrl',
    controllerAs: '$ctrl',
    templateUrl: 'newsletter/newsletter.html',
    title: 'Newsletter'
  });

};

export default NewsletterConfig;
