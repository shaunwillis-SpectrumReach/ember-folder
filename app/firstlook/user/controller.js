import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  // 
  // actions: {
  //   transitionToRoute() {
  //     this.transitionToRoute('firstlook.login');
  //   }
  // }
});
