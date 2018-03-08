import Controller from '@ember/controller';
import { get } from '@ember/object';

    export default Controller.extend({
      currentUser: Ember.inject.service(),
      session: Ember.inject.service(),

      actions: {



        scrollToTop() {
          // document.getElementById('message').scrollIntoView();
          $('html, body').animate({ scrollTop: $('#wrapper-rnh').offset().top }, 'slow');
               return false;
        },

      },
    });
