import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  pids: null,

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('pid', { current: true })
        .then((pids) => {
          this.set('pid', pids);
        });
    }
  }
});
