import Route from '@ember/routing/route';

export default Route.extend({

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
