import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  // renderTemplate: function() {
  //     this.render('loading');
  //   },

  beforeModel() {
    $('#burger').removeClass('hide');
  },

  model() {
    return RSVP.hash({
      mine: this.store.query('ae15m', {
          mine: true,
        }),
      all: this.store.findAll('ae15m'),
      ae1m: this.store.findAll('ae1m'),
      ae700k: this.store.findAll('ae700k'),
      ae450k: this.store.findAll('ae450k'),
      ae499k: this.store.findAll('ae499k'),
      //Allaes and AE15m needs to be corrected after launch
      allae: this.store.findAll('allae'),
      northeast1: this.store.query('pid', {
        division: '',
      })
    });
    // return this.store.query('ae15m', {
    //     mine: true,
    //   });
      // return this.store.findAll('ae15m');
  },




  actions: {

    filterCategoryAllaes() {
      $('#ae1m').addClass('hide');
      $('#ae15m').addClass('hide');
      $('#ae700k').addClass('hide');
      $('#ae499k').addClass('hide');
      $('#ae450k').addClass('hide');
      $('#allae').removeClass('hide');
    },

    filterCategoryAE450k() {
      $('#ae1m').addClass('hide');
      $('#ae15m').addClass('hide');
      $('#ae700k').addClass('hide');
      $('#ae499k').addClass('hide');
      $('#allae').addClass('hide');
      $('#ae450k').removeClass('hide');
    },

    filterCategoryAE700k() {
      $('#ae1m').addClass('hide');
      $('#ae15m').addClass('hide');
      $('#ae450k').addClass('hide');
      $('#ae499k').addClass('hide');
      $('#allae').addClass('hide');
      $('#ae700k').removeClass('hide');
    },

    filterCategoryAE1m() {
      $('#ae15m').addClass('hide');
      $('#ae700k').addClass('hide');
      $('#ae450k').addClass('hide');
      $('#ae499k').addClass('hide');
      $('#allae').addClass('hide');
      $('#ae1m').removeClass('hide');
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
