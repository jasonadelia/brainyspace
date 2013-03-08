var $nav = $('nav');
var $navPlaceholder = $('<div />', {
    "height": $nav.outerHeight()
});
$(window).scroll(function ()
{   
    if (!$nav.hasClass('fix') && $(window).scrollTop() > $nav.offset().top){
        $nav.before($navPlaceholder);
        $nav.addClass("fix");
    }
    else if ($nav.hasClass('fix')  && $(window).scrollTop() < $navPlaceholder.offset().top){
        $nav.removeClass("fix");
        $navPlaceholder.remove();
    }
});

$('nav').on('click', 'a', function(){
	var target = $(this);
	var hash = this.hash;
	var destination = $(hash).offset().top;

	stopAnimatedScroll();

	 $('html, body').stop().animate({ 
		scrollTop: destination
	}, 400, function() { window.location.hash = hash; });
	return false;
});

function stopAnimatedScroll(){
	if ( $('*:animated').length > 0 ) { $('*:animated').stop(); }
}