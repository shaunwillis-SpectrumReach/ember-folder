
import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    wizard: Ember.inject.service('wizard'),

    // beforeModel() {
    //   $('#burger').removeClass('hide');
    //
    // },


});
