import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      
      central: this.store.query('pids', {
        'central': true
      }),
      west: this.store.query('pids', {
        'west': true
      }),
      south: this.store.query('pids', {
        'south': true
      }),
      northeast: this.store.query('pids', {
        'northeast': true
      })

      });

  },

});
