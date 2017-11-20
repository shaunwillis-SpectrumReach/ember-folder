import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),

  actions: {
      saveForm(wizard) {
        console.log(wizard);
        const pids = this.store.createRecord('pids', wizard);

        pids.save().then(() => {
          return pids.save();
        }).then(() => {
          const secretStuff = {
            identification: wizard.email,
            password: wizard.password,
          };
          console.log(secretStuff);
          const authenticator = 'authenticator:jwt';

          this.get('session').authenticate(authenticator, secretStuff)
            .then(() => {
              this.transitionToRoute('firstlook.register-thanks');
            });
        })
        .catch(() => {
          console.log('Error Creating User');
        });
      },
    }
});
