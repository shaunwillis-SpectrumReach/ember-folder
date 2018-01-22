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
    return `https://res.cloudinary.com/http-www-firstlookspectrum-com/image/upload/w_150,h_150,c_thumb,g_face,r_max/v1516647698/${this.get('profilePicUrl')}`
  }),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date(); }
  })
});
