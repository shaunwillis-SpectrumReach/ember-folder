import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  dollars: DS.attr('string'),
  goal: DS.attr('string'),
  percentage: DS.attr('string'),
  numberofcontracts: DS.attr('string'),
  managername: DS.attr('string'),
  division: DS.attr('string'),
  region: DS.attr('string'),
  jobtitle: DS.attr('string'),
  pids: DS.belongsTo('pids'),

});
