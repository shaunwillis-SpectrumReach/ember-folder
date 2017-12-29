import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

  actions: {
      saveForm(changesFromForm) {
        // I changed ...this.get() to an array, because {} threw syntax error
          this.set('wizard.userInfo', {...this.get('wizard.userInfo'),
          changesFromForm
        });
        // If you want to do stuff with :point_up:
        let allValues = this.get('wizard.userInfo');

        let profile = this.store.createRecord('pid', allValues);
        profile.save().then(() => {
          profile.save();
        }).then(() => {
          this.transitionToRoute('firstlook.register-thanks');
          // const secretStuff = {
          //   identification: wizard.email,
          //   password: wizard.password,
          // };
          // console.log(secretStuff);
          // const authenticator = 'authenticator:jwt';
          //
          // this.get('session').authenticate(authenticator, secretStuff)
          //   .then(() => {
          //     this.transitionToRoute('firstlook.register-thanks');
          //   });
        })
        .catch(() => {
          this.transitionToRoute('firstlook.register-thanks');

        });

        // let pids = this.store.createRecord('pids', allValues);
        // //
        // pids.save().then(() => {
        //   return pids.save();
        // }).then(() => {
        //   const secretStuff = {
        //     identification: wizard.email,
        //     password: wizard.password,
        //   };
        //   console.log(secretStuff);
        //   const authenticator = 'authenticator:jwt';
        //
        //   this.get('session').authenticate(authenticator, secretStuff)
        //     .then(() => {
        //       this.transitionToRoute('firstlook.register-thanks');
        //     });
        // })
        // .catch(() => {
        //   console.log('Error Creating User');
        // });

        }
        }
  });
