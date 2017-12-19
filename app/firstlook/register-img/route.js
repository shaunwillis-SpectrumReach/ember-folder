import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel(params){
    if (params){
    if (params.queryParams.cat=="left") {
      console.log(params.queryParams.cat);
    }
    else if (params.queryParams.cat=="right") {
      console.log(params.queryParams.cat);
      }
    }
       // this.replaceWith('firstlook.login');
  },
  model() {
    return this.store.peekAll('upload');
  }


});
