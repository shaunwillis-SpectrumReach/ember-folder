import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      mine: this.store.queryRecord('rn-hall', {
          'mine': true ,
        }),
      // test: this.store.queryRecord('rn-hall', {
      //     'central': true ,
      //   }),

      central: this.store.findAll('rn-hcentral'),
      west: this.store.findAll('rn-hwest'),
      south: this.store.findAll('rn-hsouth'),
      northeast: this.store.findAll('rn-hnortheast'),
      all: this.store.findAll('rn-hall')
      });

  },

});
