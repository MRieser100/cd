import angular from 'angular';

// Create the module where our functionality can attach to
let newsletterModule = angular.module('app.newsletter', []);

// Include our UI-Router config settings
import NewsletterConfig from './newsletter.config';
newsletterModule.config(NewsletterConfig);


// Controllers
import NewsletterCtrl from './newsletter.controller';
newsletterModule.controller('NewsletterCtrl', NewsletterCtrl);


export default newsletterModule;
