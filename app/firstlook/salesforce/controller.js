import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('pids', changesFromForm);
        profile.save().then(() => {
          profile.set('pids', profile);
        }).then(() => {
          this.transitionToRoute('register-conf');

        })

  },
},
});
