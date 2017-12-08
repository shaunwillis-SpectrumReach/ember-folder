import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

beforeModel() {
  if(!currentUser) {
    this.replaceWith('firstlook.login');
  }
}
});
