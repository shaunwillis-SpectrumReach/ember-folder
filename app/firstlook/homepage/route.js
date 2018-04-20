import Ember from 'ember';
import $ from 'jquery';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
   model() {
     return this.store.query('ae15m', {
      mine: true,
    });
  },
  //  beforeModel() {
  //    $('#burger').removeClass('hide');
   //
  //  },

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
    showBurger() {
      // document.getElementById('message').scrollIntoView();
      $('#burger').removeClass('hide');
    },

  }


});
