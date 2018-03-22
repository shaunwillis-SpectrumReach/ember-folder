import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({



  model() {
    return RSVP.hash({
      // mine: this.store.query('rn-hall', {
      //     'mine': true
      //   }),
        mineae: this.store.query('rn-haedbview', {
          'mine': true
        }),
        minelsm: this.store.query('rn-hlsmdbview', {
          'mine': true
        }),
        minedos: this.store.query('rn-hdosdbview', {
          'mine': true
        }),
        minervp: this.store.query('rn-hrvpdbview', {
          'mine': true
        }),
        minedvp: this.store.query('rn-hdvpdbview', {
          'mine': true
        }),
      managername: this.store.query('rn-hall', {
          'managername': true
        }),
      managernameae: this.store.query('rn-haedbview', {
          'managername': true
        }),
      managernamedvpnortheast: this.store.query('rn-hdvpdbview', {
          'northeast': true
        }),
      managernamedvpsouth: this.store.query('rn-hdvpdbview', {
          'south': true
        }),
      managernamedvpcentral: this.store.query('rn-hdvpdbview', {
          'central': true
        }),
      managernamedvpwest: this.store.query('rn-hdvpdbview', {
          'west': true
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
      aerollup: this.store.query('rn-haedbview', {
        'ae': true
      }),
      aerolluplsm: this.store.query('rn-hlsmdbview', {
        'lsm': true
      }),
      aerollupdos: this.store.query('rn-hdosdbview', {
        'dos': true
      }),
      aerolluprvp: this.store.query('rn-hrvpdbview', {
        'rvp': true
      }),
      aerolluprvp: this.store.query('rn-hrvpdbview', {
        'rvp': true
      })
      });

  },

});
