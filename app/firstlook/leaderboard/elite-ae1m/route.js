import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    $('#burger').removeClass('hide');

  },

  model() {
    return this.store.query('Eliteae1m', {
          top5: 'Top 5'
        });
      },
});
