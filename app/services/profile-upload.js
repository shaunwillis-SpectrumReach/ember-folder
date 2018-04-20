import CloudinaryProfileUpload from 'ember-profile-upload/services/cloudinary-profile-upload';
import Ember from 'ember';

export default CloudinaryProfileUpload.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  filesystem: Ember.inject.service(),

  saveUser(uploadFile) {
    if (uploadFile) {
      // const pid = this.get('currentUser.pid');
      // const token = this.get('session.session.content.authenticated.token');
      //
      // return this.get('filesystem').fetch(`${config.DS.host}/api/pids/${pid.id}`, {
      //   method: 'PATCH',
      //   headers: {
      //     accept: 'application/json',
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: { ...pid.toJSON(), uploadFile },
      // }).then((res) => res.json())
      // .then((data) => {
      //   this.store.pushPayload(data);
      //   alert('Image Updated')
      // });
    }
  },


  actions: {
    update(closeForm, formValues) {
      this.model.setProperties(formValues);
      this.model.save().then(() => {
        closeForm();
      });
    },

    choosePic() {
      this.get('filesystem').prompt().then((upload) => {
        this.saveUser(upload[0]);
      });
    }
  }
});
