import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  // model() {
  //    return this.store.findAll('pids');
  // }

  beforeModel() {
    $('#burger').removeClass('hide');
    // in case you use this page for profile ;)
  },

});
