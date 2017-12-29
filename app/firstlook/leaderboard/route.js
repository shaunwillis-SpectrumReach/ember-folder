import Route from '@ember/routing/route';

export default Route.extend({

  beforeModel() {
    $('#burger').removeClass('hide');

  },

  model() {
    return this.store.query('ae15m', {
        mine: true,
      });

  },




  actions: {

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

  },


});
