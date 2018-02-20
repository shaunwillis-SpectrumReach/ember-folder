import DS from 'ember-data';

export default DS.Model.extend({
  FirstName: DS.attr('string'),
  LastName: DS.attr('string'),
  FullYear: DS.attr('string'),
  Division: DS.attr('string'),
  Region: DS.attr('string'),
  ManagerName: DS.attr('string'),
  Rank: DS.attr('string'),
  profilePicUrl: DS.attr('string'),
  fullProfilePicUrl: Ember.computed('profilePicUrl', function() {
    return `https://s3.amazonaws.com/sr-firstlook/public/${this.get('profilePicUrl')}`
    // return `https://firstlook-staging-api.herokuapp.com/uploads/${this.get('profilePicUrl')}`
    // return `http://localhost:3333/uploads/${this.get('profilePicUrl')}`
    // return `https://res.cloudinary.com/http-www-firstlookspectrum-com/image/upload/w_150,h_150,c_thumb,g_face,r_max/v1516647698/${this.get('profilePicUrl')}`
  }),
});
