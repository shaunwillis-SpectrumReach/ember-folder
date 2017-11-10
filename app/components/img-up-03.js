import Component from '@ember/component';

export default Component.extend({

});


$( "#ImageUp" ).ready(function() {
    //console.log( "ready!" );
    // NOTE - missing {{linkto }} for EDIT
    var ImgCode = '<p class="comment">Edit Image <img style="height:14px;" src="../assets/img/Nav_Right.svg"><p>'
    +'<div id="profileImg" ><img  style="width:80%; padding-top:12%;" src="../assets/img/profile_image.png">'
    +'</div>'
    +'<p class="comment">Upload Successful!</p>';

    $('#ImageUp').html(ImgCode);

});
