$(function() {

$('.head-galery').owlCarousel({
    loop: true,
    nav: true,
	items: 1,
	navText: ['<i class="material-icons">keyboard_arrow_left</i>','<i class="material-icons">keyboard_arrow_right</i>']
})

$('.like').on('click', function() {
	let $this = $(this),
		$numb = $this.next()
		$like = Number($numb.text())

	if($this.css('color') == 'rgb(41, 136, 0)') {
		$numb.text($like - 1)
		$(this).removeClass('activeL')
	} else {
		$numb.text($like + 1)
		$(this).addClass('activeL')
	}
})

$('.diss').on('click', function() {
	let $this = $(this),
		$numb = $this.next()
		$like = Number($numb.text())

	if($this.css('color') == 'rgb(238, 34, 34)') {
		$numb.text($like - 1)
		$(this).removeClass('activeD')
	} else {
		$numb.text($like + 1)
		$(this).addClass('activeD')
	}
})

$('nav a').click( function(){
  var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
        }
      return false;
})

$('body').append('<i id="go-top" class="material-icons">arrow_upward</i>');

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});

$(".mask").mask("+7 (999) 999-99-99");

$('.menu-hidden').on('click', function() {
	$('#nav').slideToggle()
})

});
