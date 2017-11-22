import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),

  actions: {

    saveUploads(file) {
      let profile = this.store.createRecord('uploads', file);
      profile.save().then(() => {
        profile.save();
      })
    }

  }
});
