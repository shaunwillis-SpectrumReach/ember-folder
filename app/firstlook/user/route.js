import Ember from 'ember';
import $ from 'jquery';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    currentUser: Ember.inject.service(),

  // model() {
  //    return this.store.findAll('pids');
  // }

  beforeModel() {
    $('#burger').removeClass('hide');
    // in case you use this page for profile ;)
  },


  // model() {
  //   return this.get('currentUser').loadCurrentUser();
  //
  // },
  model() {
    return this.store.query('ae15m', {
        mine: true,
      });
  }


});
