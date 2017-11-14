import Route from '@ember/routing/route';

export default Route.extend({
  currentpid: Ember.inject.service('login-form'),

  actions: {
    setCurrentPid() {
      let currentpid = Ember.get(this, 'currentpid');
      currentpid.setProperty('savecurrentpid');
    }
  }

});
