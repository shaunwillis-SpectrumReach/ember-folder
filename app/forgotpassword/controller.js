import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('forgotpassword', changesFromForm);
        profile.save().then(() => {
          profile.set('forgotpassword', profile);
        })
        this.transitionToRoute('passwordresetconfirmation');

  },
},
});
