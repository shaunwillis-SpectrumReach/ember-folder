import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  // beforeModel() {
  //   $('#burger').removeClass('hide');
  //
  // },
  model() {
    return this.store.query('Eliteae700k', {
          top5: 'Top 5'
        });
  },
});
