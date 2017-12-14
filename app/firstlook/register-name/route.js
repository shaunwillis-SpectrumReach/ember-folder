import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    };
  },
  beforeModel(params){
    if (params.queryParams.cat=="left") {
      console.log(params.queryParams.cat);
    }
    else if (params.queryParams.cat=="right") {
      console.log(params.queryParams.cat);
      }
      // this.replaceWith('firstlook.login');
      this.replaceWith('firstlook.welcome');
    }
});
