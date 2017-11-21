
import Ember from 'ember';

export default Ember.Route.extend({
    wizard: Ember.inject.service('wizard'),

    beforeModel(params){
      if (params.queryParams.cat=="left") {
        console.log(params.queryParams.cat);
        $('#cir3').removeClass("four");
        $('#cir3').addClass("fourThree");
      }   else if (params.queryParams.cat=="right") {
          console.log(params.queryParams.cat);
          $('#cir2').removeClass('threeTwo');
          $('#cir2').addClass('two');
          }

      }

});
