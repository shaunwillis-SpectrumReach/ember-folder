import Ember from 'ember';
// import config from './config/environment';

export default Ember.Controller.extend({
  // wizard: Ember.inject.service('wizard'),
  // filesystem: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),

// saveUser(uploadFile) {
//   if (uploadFile) {
//     const user = this.get('currentUser.user');
//     const token = this.get('session.session.content.authenticated.token');
//
//     return this.get('filesystem').fetch(`${config.DS.host}/api/pids/${user.id}`, {
//       method: 'PATCH',
//       headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: { ...user.toJSON(), uploadFile },
//     }).then((res) => res.json())
//     .then((data) => {
//       this.store.pushPayload(data);
//       alert('Image Updated')
//     });
//   }
// },


actions: {
  update(formValues) {
        let post = this.store.queryRecord('pid', formValues.id).then(function(formValues) {
            post.get(formValues);
            post.set(formValues);

            post.save(); // => PATCH to '/posts/1'
          });

    },
  },

  // choosePic(formValues) {
  //   this.get('filesystem').prompt().then((upload) => {
  //     this.saveUser(upload[0]);
  //   });
  // }
// }
  });
