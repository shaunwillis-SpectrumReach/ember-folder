import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  currentUser: Ember.inject.service(),
  classNames: ['profile-page'],

  actions: {
    update(closeForm, formValues) {
      this.get('onUpdate')(closeForm, formValues);
    }
  }
});
