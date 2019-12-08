// Scripts de algunas funciones de animaciones en el UI/UX del Landing Page

// Obtencion de variables
var bgImage = document.getElementById('play-bg');
var bgImage2 = document.getElementById('play-bg2');
var bgImage3 = document.getElementById('play-bg3');
var playIcon = document.getElementById('play-landing');

function changePic() {
	setTimeout(function(){ 
		$(bgImage2).css('opacity', '1');
	}, 5000);
	setTimeout(function(){ 
		$(bgImage3).css('opacity', '1');
	}, 10000);
	setTimeout(function(){ 
		$(bgImage2).css('opacity', '0')
		$(bgImage3).css('opacity', '0');
	}, 15000);
}

$(document).ready(function() {
	changePic()
	setInterval(changePic, 15000);
	$(playIcon).fadeOut(1);
	$("#container").mouseenter(function() {
		$('#play-bg, #play-bg2, #play-bg3').css('filter', 'blur(6px)');
		$('#play-bg, #play-bg2, #play-bg3').css('transition', '2s');
		$('#play-bg, #play-bg2, #play-bg3').css('cursor', 'pointer');
		$(playIcon).fadeIn("slow");
	});
	$("#container").mouseleave(function() {
		$('#play-bg, #play-bg2, #play-bg3').css('filter', 'blur(0px)');
		$('#play-bg, #play-bg2, #play-bg3').css('transition', '2s');
		$(playIcon).fadeOut(300);
	});

	$(playIcon).mouseenter(function() {
		$(this).css('color', 'white');
		$(this).css('transition', '0.25s');
	});

	$(playIcon).mouseleave(function(){
		$(this).css('color', '#2699FB');
		$(this).css('transition', '0.25s');
	});

});