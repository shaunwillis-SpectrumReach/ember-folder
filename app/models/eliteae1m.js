import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fullyear: DS.attr('string'),
  division: DS.attr('string'),
  region: DS.attr('string'),
  managername: DS.attr('string'),
  pids: DS.belongsTo('pids'),
  rank: DS.attr('string'),
  top5: DS.attr('string')
});
