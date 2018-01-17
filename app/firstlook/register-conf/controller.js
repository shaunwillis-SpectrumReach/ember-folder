import Ember from 'ember';
import config from 'ember-folder/config/environment';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),
    // ========================================
    // Profile Image upload
    // ========================================
    saveUser(uploadFile) {
      if (uploadFile) {
        const pid = this.get('currentUser.pid');
        const token = this.get('session.session.content.authenticated.token');

        return this.get('filesystem').fetch(`${config.DS.host}/api/pids/${pid.id}`, {
          method: 'PATCH',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: { ...pid.toJSON(), uploadFile },
        }).then((res) => res.json())
        .then((data) => {
          this.store.pushPayload(data);
          alert('Image Updated')
        });
      }
    },


    actions: {
      update(closeForm, formValues) {
        this.model.setProperties(formValues);
        this.model.save().then(() => {
          closeForm();
        });
      },

      choosePic(formValues) {
        this.get('filesystem').prompt().then((upload) => {
          this.saveUser(upload[0]);
        });
      }
    }
  // ========================================
  // Sign Ups
  // ========================================
  // actions: {
  //     saveForm(changesFromForm) {
  //       // I changed ...this.get() to an array, because {} threw syntax error
  //         this.set('wizard.userInfo', {...this.get('wizard.userInfo'),
  //         changesFromForm
  //       });
  //       // If you want to do stuff with :point_up:
  //       let allValues = this.get('wizard.userInfo');
  //
  //       let profile = this.store.createRecord('pid', allValues);
  //       profile.save().then(() => {
  //         profile.save();
  //       }).then(() => {
  //         this.transitionToRoute('firstlook.register-thanks');
  //         // const secretStuff = {
  //         //   identification: wizard.email,
  //         //   password: wizard.password,
  //         // };
  //         // console.log(secretStuff);
  //         // const authenticator = 'authenticator:jwt';
  //         //
  //         // this.get('session').authenticate(authenticator, secretStuff)
  //         //   .then(() => {
  //         //     this.transitionToRoute('firstlook.register-thanks');
  //         //   });
  //       })
  //       .catch(() => {
  //         this.transitionToRoute('firstlook.register-thanks');
  //
  //       });
  //
  //       // let pids = this.store.createRecord('pids', allValues);
  //       // //
  //       // pids.save().then(() => {
  //       //   return pids.save();
  //       // }).then(() => {
  //       //   const secretStuff = {
  //       //     identification: wizard.email,
  //       //     password: wizard.password,
  //       //   };
  //       //   console.log(secretStuff);
  //       //   const authenticator = 'authenticator:jwt';
  //       //
  //       //   this.get('session').authenticate(authenticator, secretStuff)
  //       //     .then(() => {
  //       //       this.transitionToRoute('firstlook.register-thanks');
  //       //     });
  //       // })
  //       // .catch(() => {
  //       //   console.log('Error Creating User');
  //       // });
  //
  //       }
  //       }
  });
