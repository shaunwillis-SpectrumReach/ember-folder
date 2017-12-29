import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    $('#burger').removeClass('hide');

  },
  model() {
    return this.store.query('Eliteae449k', {
          top5: 'Top 5'
        });
  },
});
