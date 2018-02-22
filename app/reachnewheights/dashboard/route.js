import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      mine: this.store.query('rn-hall', {
          'mine': true
        }),
      managername: this.store.query('rn-hall', {
          'managername': true
        }),
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
      aerollup: this.store.query('rn-hall', {
        'rollup': true
      })
      });

  },

});
