import DS from 'ember-data';

export default DS.Model.extend({
  pid: DS.attr('string'),
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  managername: DS.attr('string'),
  division: DS.attr('string'),
  region: DS.attr('string'),
  ae15ms: DS.hasMany('ae15m'),
  ae1ms: DS.hasMany('ae1m'),
  profilePicUrl: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
