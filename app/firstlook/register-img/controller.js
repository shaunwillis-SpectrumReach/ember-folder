import Ember from 'ember';
import config from 'ember-folder/config/environment';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),
  filesystem: Ember.inject.service(),
  selectedFiles: [],

  actions: {
    upload(selectedFiles) {
      const fetch = this.get('filesystem.fetch');
      console.log(selectedFiles);
      fetch('https://arcane-stream-63735.herokuapp.com/upload', {
        method: 'POST',
        headers: {
          accept: 'application/json',
        },
        body: { 'profile-image': selectedFiles[0]},
      }).then(res => res.json())
      .then((data) => {
        const upload = this.store.pushPayload(data);
        console.log(upload);
      });
    },
    // // save() {
    // //   this.get('wizard').saveUserInfo(this.model);
    // //
    // //   this.transitionToRoute('firstlook.register-conf');
    // // }
  }
});
