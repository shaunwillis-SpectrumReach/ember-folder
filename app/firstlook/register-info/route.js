import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      jobtitle: '',
      managername: '',
      region: '',
      division: ''
    };
  },

  beforeModel(params){
    if (params){
        // var $ = Ember.$;
        if (params.queryParams.cat=="left") {
          // console.log(params.queryParams.cat);
        }
        else if (params.queryParams.cat=="right") {
          // console.log(params.queryParams.cat);
      }
    }
     this.replaceWith('firstlook.login');
  },


});
