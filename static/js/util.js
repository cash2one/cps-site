

$(window).on('hashchange', function(e){

	var hash = location.hash;
	var lang = hash.replace( /^#/, '' );

	if(lang)
	{
		changeLanguage(lang);
	}else
	{
		changeLanguage('zh-tw'); // default
	}
});

function changeLanguage(lang)
{
	$('.text').addClass('hide');
	$('.text[lang='+lang+']').removeClass('hide');
}


$(document).ready(function(){
	$(window).trigger('hashchange');
})