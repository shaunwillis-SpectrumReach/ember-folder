import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('firstlook', function() {
    this.route('register-name');
    this.route('register-info');
    this.route('register-img');
    this.route('register-conf');
    this.route('register-thanks');
    this.route('register-pid');
    this.route('homepage');
  });

});

export default Router;
