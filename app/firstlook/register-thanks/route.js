import Route from '@ember/routing/route';

export default Route.extend({

  // Use this after Registration is finished
  // beforeModel() {
  //   this.replaceWith('firstlook.login');
  // }
  beforeModel() {
    this.replaceWith('firstlook.welcome');
  }
});
