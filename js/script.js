$(document).ready(function(){
//   ripples
    $(".container, .info").ripples({
        dropRadius: 20,
        perturbance: 0.6,
    
      });
    // magnific popup
    $('.parent-cont').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',

        gallery: {
            enabled: true
          },
        // other options

        
      });
});