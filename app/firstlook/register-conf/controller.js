import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),

  // actions: {
  //   save() {
  //     this.get('wizard').saveUserInfo(this.model);
  //
  //     this.transitionToRoute('firstlook.register-thanks');
  //   }
  // }
  actions: {
      save(formValues) {
        console.log(formValues);

        const pid = this.store.createRecord('pid', formValues);

        pid.save().then(() => {
          console.log(pid);
          return pid.save();
        }).then(() => {
          const secretStuff = {
            identification: formValues.email,
            password: formValues.password,
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
