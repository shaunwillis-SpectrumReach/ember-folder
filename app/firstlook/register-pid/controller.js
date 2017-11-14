import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),

  actions: {
    save() {
      this.get('wizard').saveUserInfo(this.model);

      this.transitionToRoute('firstlook.register-name');
    }
  }
});
