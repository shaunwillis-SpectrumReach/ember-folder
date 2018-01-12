import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fullyear: DS.attr('string'),
  division: DS.attr('string'),
  region: DS.attr('string'),
  managername: DS.attr('string'),
  rank: DS.attr('string'),
  pid: DS.belongsTo('pids')
});
