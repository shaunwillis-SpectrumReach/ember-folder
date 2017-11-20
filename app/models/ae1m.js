import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  fullyear: DS.attr('string'),
  division: DS.attr('string'),
  pids: DS.belongsTo('pids')
