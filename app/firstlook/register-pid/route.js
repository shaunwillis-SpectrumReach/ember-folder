import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      pids: ''
    };
  },
  if (params){
    var $ = Ember.$;
    if (params.queryParams.cat=="left") {
      console.log(params.queryParams.cat);
    }
    else if (params.queryParams.cat=="right") {
      console.log(params.queryParams.cat);
      }
    },
    //Use this after Registration is finished
    beforeModel() {
      this.replaceWith('firstlook.login');
    }


});
