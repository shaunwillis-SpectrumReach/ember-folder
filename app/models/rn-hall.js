import DS from 'ember-data';

export default DS.Model.extend({
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  dollars: DS.attr('string'),
  goal: DS.attr('string'),
  numberofcontracts: DS.attr('string'),
  nameofeachcontract: DS.attr('string'),
  managername: DS.attr('string'),
  region: DS.attr('string'),
  jobtitle: DS.attr('string')
  // pids: DS.belongsTo('pids')
});
