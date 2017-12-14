import Route from '@ember/routing/route';

export default Route.extend({
  // this forwards root index to firstlook index.  Remove to build in root template
  beforeModel() {
    this.replaceWith('firstlook.login');
  }
});
