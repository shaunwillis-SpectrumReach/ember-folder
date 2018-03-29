import DS from 'ember-data';

export default DS.Model.extend({
  dollars: DS.attr('string'),
  goal: DS.attr('string'),
});
