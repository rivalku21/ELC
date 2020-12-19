$('.page-scroll').not('[href="#"]').not('[href="#0"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top -50
        }, 1250, 'easeInOutExpo' );
      }
    }
  });

$(window).on('load', function() {
  $('.section1 img').addClass('timbul');
  $('.section1 .left').addClass('timbul');
})

$(window).scroll(function() {
  var wscroll = $(this).scrollTop();

  $('.section1 img').css({
    'transform' : 'translate(0px, '+ wscroll/50 +'%)'
  });

  $('.section1 .left').css({
    'transform' : 'translate(0px, '+ wscroll/30 +'%)'
  });

  $('.section2 .col-sm-3').css({
    'transform' : 'translate(0px, '+ wscroll/150 +'%)'
  });

  if (wscroll > $('.section2').offset().top - 250 ) {
    $('.section2 .col-sm-3').each(function(i) {
      setTimeout(function() {
        $('.section2 .col-sm-3').eq(i).addClass('muncul');
      }, 300 * i);
    });
  }

});