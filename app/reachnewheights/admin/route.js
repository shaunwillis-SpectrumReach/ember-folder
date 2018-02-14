import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      // mine: this.store.queryRecord('rn-hall', {
      //     mine: true,
      //   }),

      central: this.store.findAll('rn-hcentral'),
      west: this.store.findAll('rn-hwest'),
      South: this.store.findAll('rn-hsouth'),
      Northeast: this.store.findAll('rn-hnortheast'),
      all: this.store.findAll('rn-hall')
      });

  },

});
