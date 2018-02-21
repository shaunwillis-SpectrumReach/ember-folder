import Controller from '@ember/controller';
import { get } from '@ember/object';

    export default Controller.extend({
      currentUser: Ember.inject.service(),
      session: Ember.inject.service(),



      columns: [
        {
          "title": "Job Title",
          "propertyName": "jobtitle",
          "filterWithSelect": true,
          "predefinedFilterOptions": [
            "Account Executive",
            "LSM"
          ]
        },
        // {
        //   "title": "Profile Img",
        //   "component": "profileImg"
        // },
        {
          "title": "Name",
          "propertyName": "name",
          "editable": false
        },
        {
          "title": "Manager Name",
          "propertyName": "managername"
        },
        {
          "title": "Region",
          "propertyName": "region"
        },
        {
          "propertyName": "dollars"
        },
        {
          "propertyName": "goal"
        },
        {
          "title": "# of Contracts",
          "propertyName": "numberofcontracts"
        },
        {
          "title": "Name of Contracts",
          "propertyName": "nameofeachcontract"
        },
        {
          "title": "Edit",
          "component": "editRow",
          "className": "editBtn",
          "editable": false
        }
      ],
      actions: {
        


        filterCategoryAllaes() {
          $('#ae1m').addClass('hide');
          $('#ae15m').addClass('hide');
          $('#ae700k').addClass('hide');
          $('#ae499k').addClass('hide');
          $('#ae450k').addClass('hide');
          $('#allae').removeClass('hide');

          $('#ae15mBtn').addClass('AE15mActive');
          $('#ae450kBtn').removeClass('AE450kActive');
          $('#ae700kBtn').removeClass('AE700kActive');
          $('#ae1mBtn').removeClass('AE1mActive');
          $('#ae499kBtn').removeClass('AE499kActive');
          $('#ae499kBtn').removeClass('AE499kActive');

        },

        filterCategoryAE450k() {
          $('#ae1m').addClass('hide');
          $('#ae15m').addClass('hide');
          $('#ae700k').addClass('hide');
          $('#ae499k').addClass('hide');
          $('#allae').addClass('hide');
          $('#ae450k').removeClass('hide');

          $('#ae450kBtn').addClass('AE450kActive');
          $('#ae700kBtn').removeClass('AE700kActive');
          $('#ae1mBtn').removeClass('AE1mActive');
          $('#ae499kBtn').removeClass('AE499kActive');
          $('#ae15mBtn').removeClass('AE15mActive');
          $('#ae499kBtn').removeClass('AE499kActive');

        },

        filterCategoryAE700k() {
          $('#ae1m').addClass('hide');
          $('#ae15m').addClass('hide');
          $('#ae450k').addClass('hide');
          $('#ae499k').addClass('hide');
          $('#allae').addClass('hide');
          $('#ae700k').removeClass('hide');

          $('#ae700kBtn').addClass('AE700kActive');
          $('#ae1mBtn').removeClass('AE1mActive');
          $('#ae499kBtn').removeClass('AE499kActive');
          $('#ae15mBtn').removeClass('AE15mActive');
          $('#ae450kBtn').removeClass('AE450kActive');
          $('#ae499kBtn').removeClass('AE499kActive');

        },

        filterCategoryAE1m() {
          $('#ae15m').addClass('hide');
          $('#ae700k').addClass('hide');
          $('#ae450k').addClass('hide');
          $('#ae499k').addClass('hide');
          $('#allae').addClass('hide');
          $('#ae1m').removeClass('hide');

          $('#ae1mBtn').addClass('AE1mActive');
          $('#ae499kBtn').removeClass('AE499kActive');
          $('#ae15mBtn').removeClass('AE15mActive');
          $('#ae700kBtn').removeClass('AE700kActive');
          $('#ae450kBtn').removeClass('AE450kActive');
          $('#ae499kBtn').removeClass('AE499kActive');

        },

        showAllAEs() {
          $('#ae1m').addClass('hide');
          $('#ae700k').addClass('hide');
          $('#ae450k').addClass('hide');
          $('#ae499k').addClass('hide');
          $('#allae').addClass('hide');
          $('#ae15m').removeClass('hide');
        },

        filterCategoryAE499k() {
          $('#ae1m').addClass('hide');
          $('#ae15m').addClass('hide');
          $('#ae700k').addClass('hide');
          $('#ae450k').addClass('hide');
          $('#allae').addClass('hide');
          $('#ae499k').removeClass('hide');

          $('#ae499kBtn').addClass('AE499kActive');
          $('#ae15mBtn').removeClass('AE15mActive');
          $('#ae1mBtn').removeClass('AE1mActive');
          $('#ae700kBtn').removeClass('AE700kActive');
          $('#ae450kBtn').removeClass('AE450kActive');
        },

        // filterCategoryAE1m() {
        //   // return this.store.query('ae15m', {
        //   // });
        //   $('#ae15m').addClass('displaynone');
        // },

        scrollToTop() {
          // document.getElementById('message').scrollIntoView();
          $('html, body').animate({ scrollTop: $('#wrapper').offset().top }, 'slow');
               return false;
        },

        resetList() {
          // document.getElementById('message').scrollIntoView();
          $("#datatable").animate({ scrollTop: 0 }, "slow");
        },
        showFilters() {
          // document.getElementById('message').scrollIntoView();
          $('#Filters').removeClass('hide');
          $('#showFilter').addClass('hide');
          $('#hideFilter').removeClass('hide');
        },
        hideFilters() {
          // document.getElementById('message').scrollIntoView();
          $('#Filters').addClass('hide');
          $('#showFilter').removeClass('hide');
          $('#hideFilter').addClass('hide');
        },
        showCategory() {
          // document.getElementById('message').scrollIntoView();
          $('#filterCategory').removeClass('hide');
          $('#filterDivisions').addClass('hide');
          $('#filterRegions').addClass('hide');
          $('#filterManagers').addClass('hide');
          $('#filterAEs').addClass('hide');
        },
        showDivision() {
          // document.getElementById('message').scrollIntoView();
          $('#filterCategory').addClass('hide');
          $('#filterDivisions').removeClass('hide');
          $('#filterRegions').addClass('hide');
          $('#filterManagers').addClass('hide');
          $('#filterAEs').addClass('hide');
        },

        showRegion() {
          // document.getElementById('message').scrollIntoView();
          $('#filterCategory').addClass('hide');
          $('#filterDivisions').addClass('hide');
          $('#filterRegions').removeClass('hide');
          $('#filterManagers').addClass('hide');
          $('#filterAEs').addClass('hide');
        },

        showManager() {
          // document.getElementById('message').scrollIntoView();
          $('#filterCategory').addClass('hide');
          $('#filterDivisions').addClass('hide');
          $('#filterRegions').addClass('hide');
          $('#filterManagers').removeClass('hide');
          $('#filterAEs').addClass('hide');
        },

        showAE() {
          // document.getElementById('message').scrollIntoView();
          $('#filterCategory').addClass('hide');
          $('#filterDivisions').addClass('hide');
          $('#filterRegions').addClass('hide');
          $('#filterManagers').addClass('hide');
          $('#filterAEs').removeClass('hide');
        },
        showAll() {
          // document.getElementById('message').scrollIntoView();
          $('#filterCategory').addClass('hide');
          $('#filterDivisions').addClass('hide');
          $('#filterRegions').addClass('hide');
          $('#filterManagers').addClass('hide');
          $('#filterAEs').addClass('hide');

          $('#Filters').addClass('hide');
          $('#showFilter').removeClass('hide');
          $('#hideFilter').addClass('hide');

        },
        removeCategory() {
          $('#filterCategory').addClass('hide');
          $('#filterDivisions').addClass('hide');
          $('#filterRegions').addClass('hide');
          $('#filterManagers').addClass('hide');
          $('#filterAEs').addClass('hide');
        },

      },
    });
