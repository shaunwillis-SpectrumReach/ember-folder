import Ember from 'ember';
import config from 'ember-folder/config/environment';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),
  filesystem: Ember.inject.service(),
  selectedFiles: [],

  actions: {
    upload(file) {
      const fetch = this.get('filesystem.fetch');

      fetch('https://arcane-stream-63735.herokuapp.com/upload', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: { 'profile-image': file[0] },
      }).then(res => res.json())
      .then((data) => {
        const upload = this.store.pushPayload(data);

        this.store.peekAll('upload');
      });
    }
    // // save() {
    // //   this.get('wizard').saveUserInfo(this.model);
    // //
    // //   this.transitionToRoute('firstlook.register-conf');
    // // }
  }
});
