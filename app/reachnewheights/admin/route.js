import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      mine: this.store.query('rn-hall', {
          'mine': true
          // include: 'rn-hcentrals'
        }),
      // test: this.store.queryRecord('rn-hall', {
      //     'central': true ,
      //   }),

      central: this.store.query('rn-hall', {
        'central': true
      }),
      west: this.store.query('rn-hall', {
        'west': true
      }),
      south: this.store.query('rn-hall', {
        'south': true
      }),
      northeast: this.store.query('rn-hall', {
        'northeast': true
      }),
      all: this.store.query('rn-hall', {
        'rollup': true
      })
      // central: this.store.findAll('rn-hcentral'),
      // west: this.store.findAll('rn-hwest'),
      // south: this.store.findAll('rn-hsouth'),
      // northeast: this.store.findAll('rn-hnortheast'),
      // all: this.store.findAll('rn-hall')
      });

  },

});
