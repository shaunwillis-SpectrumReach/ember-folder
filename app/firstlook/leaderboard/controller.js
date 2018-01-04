import Ember from 'ember';
export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  showOnlyAE15m: false,

actions: {
  toggleShowingAE15m() {
    this.toggleProperty('showOnlyAE15m');
  },

}


});
