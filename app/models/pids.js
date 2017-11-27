import DS from 'ember-data';

export default DS.Model.extend({
  pid: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  managername: DS.attr('string'),
  // division: DS.attr('string'),
  // region: DS.attr('string'),
  ae15m: DS.belongsTo('ae15m'),
  ae1m: DS.belongsTo('ae1m'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
