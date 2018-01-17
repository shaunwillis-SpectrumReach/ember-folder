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
  jobtitle: DS.attr('string'),
  ae15ms: DS.hasMany('ae15m'),
  ae1ms: DS.hasMany('ae1m'),
  profilePicUrl: DS.attr('string'),
  fullProfilePicUrl: Ember.computed('profilePicUrl', function() {
    return `http://localhost:3333/uploads/${this.get('profilePicUrl')}`
  }),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
