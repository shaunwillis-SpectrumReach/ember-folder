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

    this.route('login');

    this.route('user', function() {
      this.route('profile', function() {
        this.route('detail', { path: '/detail/:pid_id' });
        this.route('edit', { path: '/edit/:pid_id' });
      });
    });
    this.route('logout');

    this.route('welcome');
    this.route('leaderboard', function() {
      this.route('elite-ae15m', function() {
        this.route('fullstandings');
      });
      this.route('elite-ae1m');
      this.route('elite-ae700k');
      this.route('elite-ae450k');
      this.route('elite-ae400k');
    });
    this.route('rules');
    this.route('faqs');
    this.route('salesforce');
  });

});

export default Router;
