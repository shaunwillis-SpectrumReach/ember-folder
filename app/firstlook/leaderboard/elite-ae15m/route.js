import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    $('#burger').removeClass('hide');

  },

  // model() {
  //   return this.store.query('Eliteae15m', {
  //       mine: true,
  //     });
  // },
  model() {
    return this.store.query('Eliteae15m', {
          top5: 'Top 5'
        });
  },

});
