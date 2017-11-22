import Ember from 'ember';

export default Ember.Controller.extend({
  wizard: Ember.inject.service('wizard'),


  // regionOptions: [
  //     'Central',
  //     'Northeast',
  //     'Southeast',
  //     'West'
  //   ],

  // divisionOptions: [
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

  region: null,
   regions: Ember.String.w('Central Northeast Southeast West'),

   division: null,
    divisions: Ember.String.w('Carolinas Florida LA MidNorth Midwest Mountain_States New_York Ohio Pacific_States Southeast Texas Upstate_NY_ME'),

  actions: {
    save() {
      this.get('wizard').saveUserInfo(this.model);

      this.transitionToRoute('firstlook.register-img');
    },
    selectRegion(region) {
      this.set('region', region);
    },

    selectDivision(division) {
      this.set('division', division);
    }


  }


});
