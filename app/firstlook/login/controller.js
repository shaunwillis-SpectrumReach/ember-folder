import Ember from 'ember';

export default Ember.Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    checkForm(formValues) {
      const secretStuff = {
        identification: formValues.email,
        password: formValues.password
      };
      const authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, secretStuff).then(() => this.get('currentUser').loadCurrentUser()).then(() => {
        if (this.get('currentUser')) {
          this.transitionToRoute('firstlook.welcome');
        } else {
          this.transitionToRoute('firstlook.login');
        }
      });
    }
  }
});
// app/controllers/login.js
// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   session: Ember.inject.service(),
//
//   actions: {
//     authenticate: function() {
//       var credentials = this.getProperties('identification', 'password'),
//         authenticator = 'authenticator:token';
//
//       this.get('session').authenticate(authenticator, credentials);
//     }
//   }
// });
