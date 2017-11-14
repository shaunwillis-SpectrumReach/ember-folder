import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      first: '',
      last: '',
      email: '',
      password: ''
    };
  }
});
