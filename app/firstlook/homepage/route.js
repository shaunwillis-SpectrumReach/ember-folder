import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  // model() {
  //    return this.store.findAll('pids');
  // }
  // beforeModel() {
  //   this.replaceWith('firstlook.login');
  // }
});
