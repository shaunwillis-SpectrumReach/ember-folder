import Route from '@ember/routing/route';

export default Route.extend({

  actions: {

    scrollToTop() {
      // document.getElementById('message').scrollIntoView();
      $('html, body').animate({ scrollTop: $('#wrapper').offset().top }, 'slow');
           return false;
    },

    resetList() {
      // document.getElementById('message').scrollIntoView();
      $('#datatable').scrollTop();
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

  },


});
