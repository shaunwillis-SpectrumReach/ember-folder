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
    // all: this.store.findAll('ae15m'),
    ae1m: this.store.findAll('ae1m'),
    ae700k: this.store.findAll('ae700k'),
    ae450k: this.store.findAll('ae450k'),
    ae499k: this.store.findAll('ae499k'),
    //Allaes and AE15m needs to be corrected after launch
    allae: this.store.findAll('allae')
    // northeast: this.store.findAll('ae15m').then(results => results.filter((ae15m) => {
    //                 return ae15m.get('division') === 'northeast';
    //              })
    //            )
    // northeast: Ember.computed.sort('ae15m', 'sortDivisions')

    });
    // sortDefinition: Ember.computed.sort('division')
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
