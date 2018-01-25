import Route from '@ember/routing/route';

export default Route.extend({

  // beforeModel() {
  //   $('#burger').removeClass('hide');
  //
  // },

 actions: {
   scrollToTop() {
     // document.getElementById('message').scrollIntoView();
     $('html, body').animate({ scrollTop: $('#wrapper').offset().top }, 'slow');
          return false;
   },
   showBurger() {
     // document.getElementById('message').scrollIntoView();
     $('#burger').removeClass('hide');
   },

 }


});
