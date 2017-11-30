
import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),

  queryParams: ['cat'],
  cat: null,


});
