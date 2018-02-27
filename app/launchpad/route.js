import Route from '@ember/routing/route';

export default Route.extend({

  actions: {

    scrollToTop() {
      // document.getElementById('message').scrollIntoView();
      $('html, body').animate({ scrollTop: $('#wrapper-launch').offset().top }, 'slow');
           return false;
    },

},

});
