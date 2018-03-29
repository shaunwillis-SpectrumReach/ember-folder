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
      managernamervpnortheast: this.store.query('rn-hrvpdbview', {
          'northeast': true
        }),
      managernamervpsouth: this.store.query('rn-hrvpdbview', {
          'south': true
        }),
      managernamervpcentral: this.store.query('rn-hrvpdbview', {
          'central': true
        }),
      managernamervpwest: this.store.query('rn-hrvpdbview', {
          'west': true
        }),
      managernamedosnortheast: this.store.query('rn-hdosdbview', {
          'northeast': true
        }),
      managernamedossouth: this.store.query('rn-hdosdbview', {
          'south': true
        }),
      managernamedoscentral: this.store.query('rn-hdosdbview', {
          'central': true
        }),
      managernamedoswest: this.store.query('rn-hdosdbview', {
          'west': true
        }),
      managernamelsmnortheast: this.store.query('rn-hlsmdbview', {
          'northeast': true
        }),
      managernamelsmsouth: this.store.query('rn-hlsmdbview', {
          'south': true
        }),
      managernamelsmcentral: this.store.query('rn-hlsmdbview', {
          'central': true
        }),
      managernamelsmwest: this.store.query('rn-hlsmdbview', {
          'west': true
        }),
      central: this.store.query('rn-haedbview', {
        'central': true
      }),
      west: this.store.query('rn-haedbview', {
        'west': true
      }),
      south: this.store.query('rn-haedbview', {
        'south': true
      }),
      northeast: this.store.query('rn-haedbview', {
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
