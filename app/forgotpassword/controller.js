import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('forgotpassword', changesFromForm);
        profile.save().then(() => {
          profile.set('forgotpassword', profile);
        })
        .then(() => {
          this.transitionToRoute('passwordresetconfirmation');
        })
        .catch(() => {
          alert('User Error. One password reset per email address in 24 hour period.');
        })
  },
},
});
