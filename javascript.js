// GOOGLE WEB FONTS
  WebFontConfig = {
    google: { families: [ 'Droid+Sans:400,700:latin', 'Droid+Serif:400,700:latin', 'Pacifico::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
// --------------------GOOGLE WEB FONTS

//fading for code blocks with sections
//pre code blocks are 1 indexed
jQuery(function($){
	$('*').bind("showoff:show", function(event){
		$('.code-block-with-sections[data-show-block]').each(function(){
			var $block = $(this);
			var block_number = parseInt($block.attr('data-show-block'));
			$('pre[data-block-name='+block_number+']', $block).css('opacity', 1);
			//for(i = 1; i<= block_number; i++){
			//	$('pre[data-block-name='+i+']', $block).css('opacity', 1);
			//}
		});
	});
});

//jQuery(function($){
//	$('*').bind("showoff:show", function(event){
//		charts();
//	});
//});
