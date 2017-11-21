import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      jobtitle: '',
      managername: '',
      email: '',
      password: '',
    };
  },
  beforeModel(params){
    if (params.queryParams.cat=="left") {
      console.log(params.queryParams.cat);
      $('#cir2').removeClass("two");
      $('#cir2').addClass("threeTwo");
    }
    else if (params.queryParams.cat=="right") {
      console.log(params.queryParams.cat);
      $('#cir2').removeClass('threeTwo');
      $('#cir2').addClass('two');
      }
    }
});
