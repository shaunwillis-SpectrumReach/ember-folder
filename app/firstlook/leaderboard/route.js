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
      $('html, body').animate({ scrollTop: $('#wrapper').offset().top }, 'slow');
           return false;
    },

  },


});
