import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  // beforeModel() {
  //   $('#burger').removeClass('hide');
  //
  // },
  model() {
    return this.store.query('ae15m', {
     mine: true,
   });
 },
 actions: {
   scrollToTop() {
     // document.getElementById('message').scrollIntoView();
     $('html, body').animate({ scrollTop: $('#wrapper').offset().top }, 'slow');
          return false;
   },
   showBurger() {
     // document.getElementById('message').scrollIntoView();
     $('#burger').removeClass('hide');
   },

 }


});
