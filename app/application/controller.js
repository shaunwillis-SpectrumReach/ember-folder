
import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),
  currentUser: Ember.inject.service(),

  queryParams: ['cat'],
  cat: null,


});
