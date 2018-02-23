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
          "placeholder": "Name"
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

      ],
      actions: {

        showAllAEs() {
          $('#aeWest').addClass('hide');
          $('#aeNortheast').addClass('hide');
          $('#aeSouth').addClass('hide');
          $('#aeCentral').addClass('hide');
        },

        filterCategoryCentral() {
          $('#aeWest').addClass('hide');
          $('#aeSouth').addClass('hide');
          $('#aeNortheast').addClass('hide');
          $('#aeCentral').removeClass('hide');

          $('#divCentral').addClass('divisionBtn1-Active');
          $('#divNortheast').removeClass('divisionBtn4-Active');
          $('#divWest').removeClass('divisionBtn3-Active');
          $('#divSouth').removeClass('divisionBtn2-Active');

        },

        filterCategoryNortheast() {
          $('#aeWest').addClass('hide');
          $('#aeSouth').addClass('hide');
          $('#aeCentral').addClass('hide');
          $('#aeNortheast').removeClass('hide');

          $('#divWest').removeClass('divisionBtn3-Active');
          $('#ae1mBtn').removeClass('AE1mActive');
          $('#divSouth').removeClass('divisionBtn2-Active');
          $('#divCentral').removeClass('divisionBtn1-Active');

        },

        filterCategoryWest() {
          $('#aeNortheast').addClass('hide');
          $('#aeSouth').addClass('hide');
          $('#aeCentral').addClass('hide');
          $('#aeWest').removeClass('hide');

          $('#divWest').addClass('divisionBtn3-Active');
          $('#divCentral').removeClass('divisionBtn1-Active');
          $('#divNortheast').removeClass('divisionBtn4-Active');
          $('#divSouth').removeClass('divisionBtn2-Active');

        },

        filterCategorySouth() {
          $('#aeWest').addClass('hide');
          $('#aeNortheast').addClass('hide');
          $('#aeCentral').addClass('hide');
          $('#aeSouth').removeClass('hide');

          $('#divSouth').addClass('divisionBtn2-Active');
          $('#divCentral').removeClass('divisionBtn1-Active');
          $('#divWest').removeClass('divisionBtn3-Active');
          $('#divNortheast').removeClass('divisionBtn4-Active');
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
