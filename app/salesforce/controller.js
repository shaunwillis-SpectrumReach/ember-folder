import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('pid', changesFromForm);
        profile.save().then(() => {
          profile.set('pid', profile);
        }).then(() => {
          this.transitionToRoute('firstlook.register-thanks');

        })
        .catch(() => {
                alert('Email address has already been used.');
              });
  },
},
});
