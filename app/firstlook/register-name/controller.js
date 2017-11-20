import Ember from 'ember';
// import Password from "ember-cli-password-toggle";

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),


  actions: {
    save() {
      this.get('wizard').saveUserInfo(this.model);

      this.transitionToRoute('firstlook.register-info');
    }
  }
});
