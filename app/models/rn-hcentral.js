import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  dollars: DS.attr('string'),
  goal: DS.attr('string'),
  numberofcontracts: DS.attr('string'),
  nameofeachcontract: DS.attr('string'),
  managername: DS.attr('string'),
  division: DS.attr('string'),
  region: DS.attr('string'),
  jobtitle: DS.attr('string'),
  RnHall: DS.belongsTo('RnHall')
  // pids: DS.belongsTo('pids')
});
