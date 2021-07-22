var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:3,
            nav:false
        },
        768:{
            items:4,
            nav:true,
            loop:false
        }
    }
})
$(document).ready(function(){
    $('#switch li').click(function(){
         $(this).addClass('active').siblings().removeClass('active');
  });      // #change li =this
});
   

$(document).ready(function(){
    $('.buttons button').click(function(){
         $(this).addClass('cativate').siblings().removeClass('cativate');
  });      // #change li =this
});
   