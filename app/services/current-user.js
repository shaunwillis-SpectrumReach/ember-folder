import Service from '@ember/service';

export default Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  pids: null,

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('pids', { current: true })
        .then((user) => {
          this.set('pids', user);
        });
    }
  }
});
