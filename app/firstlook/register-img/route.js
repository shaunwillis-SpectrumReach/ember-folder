import Route from '@ember/routing/route';

export default Route.extend({

  if (params){
    if (params.queryParams.cat=="left") {
      console.log(params.queryParams.cat);
      $('#cir3').removeClass("three");
      $('#cir3').addClass("fourThree");
    }
    else if (params.queryParams.cat=="right") {
      console.log(params.queryParams.cat);
      $('#cir3').removeClass('fourThree');
      $('#cir3').addClass('three');
      }
    }

});
