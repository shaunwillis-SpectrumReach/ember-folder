import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  // beforeModel() {
  //   $('#burger').removeClass('hide');
  //
  // },
  model() {

    return this.store.findAll('eliteae700k');
  },
});
