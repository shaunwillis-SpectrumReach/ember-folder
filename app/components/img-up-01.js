import Component from '@ember/component';

export default Component.extend({

});

//alert("connected");
$( "#ImageUp" ).ready(function() {
    //console.log( "ready!" );
    // NOTE - missing {{linkto }} for Skip
    var ImgCode = '<p class="comment">Skip for Now <img style="height:14px;" src="../assets/img/Nav_Right.svg"><p>'
    +'<div id="uploadBox" ><img  style="width:80%; padding-top:12%;" src="../assets/img/image_upload.svg">'
    +'<p><strong>Choose file</strong><br><span class="comment">Size limit: 10MB</span></p></div>'
    +'<p class="comment">• Please upload either a .JPG or .PNG only  </p>';

    $('#ImageUp').html(ImgCode);

});
