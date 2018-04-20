import Component from '@ember/component';

export default Component.extend({




  url: "http://localhost:3333/api/profile/images",

  filesDidChange: function(files) {
    let uploadFile = this.store.createRecord('uploads', files);
      uploadFile.save().then(() => {
        uploadFile.save();
      }).then(() => {
        this.transitionToRoute('firstlook.register-conf')
      // let uploadUrl = this.get('url'),
      //   files     = this.get('files'),
      //   uploader  = EmberUploader.S3Uploader.create({
      //     url: uploadUrl
        });

  //   if (!Ember.isEmpty(files))
  //     //alert("Files will upload.");
  //     uploader.upload(files[0]);
  }.observes('files')
});
