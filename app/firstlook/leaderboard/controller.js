import Ember from 'ember';
export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  showOnlyAE15m: false,
  columns: [
  {
    "propertyName": "id",
    "title": "Rank",
  },
  {
    "propertyName": "name",
    "title": "AE Name",
    "filterPlaceholder": "Search..."
  },
  // {
  //   "propertyName": "lastname",
  //   "title": "Last Name"
  // },
  {
    "propertyName": "managername",
    "title": "Manager"
      },
  {
    "propertyName": "division",
    "title": "Division",
    "filterWithSelect": true,
    "predefinedFilterOptions": [
      "Northeast",
      "Northwest",
      "Southeast",
      "West"
    ]
  },
  {
    "propertyName": "region",
    "title": "Region",
    "filterWithSelect": true,
    "predefinedFilterOptions": [
      "Caronlinas",
      "Florida",
      "LA",
      "MidNorth",
      "Midwest",
      "Mountain States",
      "New York",
      "Ohio",
      "Pacific States",
      "Southeast",
      "Texas",
      "Upstate NY - ME"
    ]
  },
  {
      "title": "Progress",
      "component": "progressBar"
    },
  {
    "propertyName": "fullyear",
    "title": "%"
  }
],

actions: {
  toggleShowingAE15m() {
    this.toggleProperty('showOnlyAE15m');
  },

}


});
