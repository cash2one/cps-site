
var support = ["zh-tw", "en"];

$(window).on('hashchange', function(e){

	var hash = location.hash;
	var lang = hash.replace( /^#/, '' );

	// console.log('current language:', lang)

	if(lang)
	{
		// console.log("change to", lang)
		changeLanguage(lang);
	}else
	{
		changeLanguage('zh-tw'); // default
	}
});

function changeLanguage(lang)
{
	// find all tags with attribute "lang"
	$.each( $('*[lang]'), function(i, this_obj){

		// ignore <HTML> and <BODY> tags
		if ( this_obj.tagName.toUpperCase() == "HTML"  || this_obj.tagName.toUpperCase() == "BODY")	{
			return true;
		}

		// get the lang of this obj
		var this_lang = $(this_obj).attr("lang");

		if ( this_lang != lang )
		{
			if ( !$(this_obj).hasClass("hide") )
			{
				$(this_obj).addClass("hide");	
			}			
		}
		else
		{
			$(this_obj).removeClass("hide");
		}
	})
}


$(document).ready(function(){
	$(window).trigger('hashchange');
})