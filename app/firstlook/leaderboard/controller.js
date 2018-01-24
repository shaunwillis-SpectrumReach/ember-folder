import Ember from 'ember';
export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  showOnlyAE15m: false,
  columns: [
    {
        "title": "Rank",
        "component": "rankNumber"
      },
    {
        "title": "",
        "component": "profileImg",
        "className": " listHide2 ",

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
    "title": "Manager",
    "className": " listHide2 ",

      },
  {
    "propertyName": "division",
    "title": "Division",
    "className": " listHide2 ",

    "filterWithSelect": true,
    "predefinedFilterOptions": [
      "Northeast",
      "Central",
      "Southeast",
      "West"
    ]
  },
  {
    "propertyName": "region",
    "title": "Region",
    "className": " listHide2 ",
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
      "component": "progressBar",
      "className": "widerwidth listHide ",
    },
  {
      "title": "%",
      "component": "percentSymbol"
    }
],

actions: {
  toggleShowingAE15m() {
    this.toggleProperty('showOnlyAE15m');
  },

}


});
