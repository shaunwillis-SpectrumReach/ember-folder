import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  currentUser: Ember.inject.service(),
  model({ pid_id }) {
    // debugger
     return this.store.findRecord('pids', pid_id);
   },
  // model() {
  //   return this.store.query('pids', {
  //     mine: true,
  //   });
  // },
});
