import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),


  // divisionOptions: [
  //     'Central',
  //     'Northeast',
  //     'Southeast',
  //     'West'
  //   ],

  // regionOptions: [
  //   'Carolinas',
  //   'Florida',
  //   'LA',
  //   'MidNorth',
  //   'Midwest',
  //   'Mountain States',
  //   'New York',
  //   'Ohio',
  //   'Pacific States',
  //   'Southeast',
  //   'Texas',
  //   'Upstate NY - ME'
  //   ],

  actions: {
    save() {
      this.get('wizard').saveUserInfo(this.model);

      this.transitionToRoute('firstlook.register-img');
    }
  }
});
