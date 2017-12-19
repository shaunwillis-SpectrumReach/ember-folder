import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  // model() {
  //    return this.store.findAll('pids');
  // }
  // beforeModel() {
  //   this.replaceWith('firstlook.login');
  // }

  actions: {
    scrollToMessage() {
      // document.getElementById('message').scrollIntoView();
      $('html, body').animate({ scrollTop: $('#message').offset().top }, 'slow');
           return false;
    },
    scrollToTop() {
      // document.getElementById('message').scrollIntoView();
      $('html, body').animate({ scrollTop: $('#wrapper').offset().top }, 'slow');
           return false;
    },
    showMore() {
      // document.getElementById('message').scrollIntoView();
      $('#comment').addClass('showContent').removeClass('hideContent');
      $('#more').addClass('hide').removeClass('show');
      $('#less').addClass('show').removeClass('hide');
    },
    showLess() {
      // document.getElementById('message').scrollIntoView();
      $('#comment').addClass('hideContent').removeClass('showContent');
      $('#more').addClass('show').removeClass('hide');
      $('#less').addClass('hide').removeClass('show');
    },
  }

});
