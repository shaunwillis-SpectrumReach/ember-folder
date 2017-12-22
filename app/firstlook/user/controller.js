import Ember from 'ember';
import config from 'ember-folder/config/environment';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  // filesystem: Ember.inject.service(),
  session: Ember.inject.service(),
  //
  actions: {
    transitionToRoute() {
      this.transitionToRoute('firstlook.login');
    }
  }
  //
  // file upload setup
  // saveUser(uploadFile) {
  //   if (uploadFile) {
  //     const user = this.get('currentUser.user');
  //     const token = this.get('session.session.content.authenticated.token');
  //
  //     return this.get('filesystem').fetch(`${config.DS.host}/api/pids/${user.id}`, {
  //       method: 'PATCH',
  //       headers: {
  //         accept: 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //       body: { ...user.toJSON(), uploadFile },
  //     }).then((res) => res.json())
  //     .then((data) => {
  //       this.store.pushPayload(data);
  //       alert('Image Updated')
  //     });
  //   }
  // },
  //
  //
  // actions: {
  //   update(closeForm, formValues) {
  //     this.model.setProperties(formValues);
  //     this.model.save().then(() => {
  //       closeForm();
  //     });
  //   },
  //
  //   choosePic(formValues) {
  //     this.get('filesystem').prompt().then((upload) => {
  //       this.saveUser(upload[0]);
  //     });
  //   }
  // }
});
