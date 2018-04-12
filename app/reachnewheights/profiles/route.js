import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      mine: this.store.query('rn-hall', {
          'mine': true
        }),
      central: this.store.query('rn-hall', {
        'allcentral': true
      }),
      west: this.store.query('rn-hall', {
        'allwest': true
      }),
      south: this.store.query('rn-hall', {
        'allsouth': true
      }),
      northeast: this.store.query('rn-hall', {
        'allnortheast': true
      }),
      aerollup: this.store.query('rn-hall', {
        'rollup': true
      })
      });

  },

});
