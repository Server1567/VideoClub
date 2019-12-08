// Scripts de algunas funciones de animaciones en el UI/UX del Dashboard

$(document).ready(function() {

	function newsCarrousel() {
		$('.play-landing').fadeOut(1);

		$(".image1").mouseenter(function(){
			$('#play-landing1').fadeIn('slow');
		});
		$(".image1").mouseleave(function(){
			$('#play-landing1').fadeOut(300);
		});

		$(".image2").mouseenter(function(){
			$('#play-landing2').fadeIn('slow');
		});
		$(".image2").mouseleave(function(){
			$('#play-landing2').fadeOut(300);
		});

		$(".image3").mouseenter(function(){
			$('#play-landing3').fadeIn('slow');
		});
		$(".image3").mouseleave(function(){
			$('#play-landing3').fadeOut(300);
		});

		$(".image4").mouseenter(function(){
			$('#play-landing4').fadeIn('slow');
		});
		$(".image4").mouseleave(function(){
			$('#play-landing4').fadeOut(300);
		});

		$(".image5").mouseenter(function(){
			$('#play-landing5').fadeIn('slow');
		});
		$(".image5").mouseleave(function(){
			$('#play-landing5').fadeOut(300);
		});

		$(".image6").mouseenter(function(){
			$('#play-landing6').fadeIn('slow');
		});
		$(".image6").mouseleave(function(){
			$('#play-landing6').fadeOut(300);
		});

		$(".image7").mouseenter(function(){
			$('#play-landing7').fadeIn('slow');
		});
		$(".image7").mouseleave(function(){
			$('#play-landing7').fadeOut(300);
		});

		$(".image8").mouseenter(function(){
			$('#play-landing8').fadeIn('slow');
		});
		$(".image8").mouseleave(function(){
			$('#play-landing8').fadeOut(300);
		});
	}
	newsCarrousel();

	function catOne() {
		$('.play-landing').fadeOut(1);

		$(".romance1").mouseenter(function(){
			$('#play-romance1').fadeIn('slow');
		});
		$(".romance1").mouseleave(function(){
			$('#play-romance1').fadeOut(300);
		});

		$(".romance2").mouseenter(function(){
			$('#play-romance2').fadeIn('slow');
		});
		$(".romance2").mouseleave(function(){
			$('#play-romance2').fadeOut(300);
		});

		$(".romance3").mouseenter(function(){
			$('#play-romance3').fadeIn('slow');
		});
		$(".romance3").mouseleave(function(){
			$('#play-romance3').fadeOut(300);
		});

		$(".romance4").mouseenter(function(){
			$('#play-romance4').fadeIn('slow');
		});
		$(".romance4").mouseleave(function(){
			$('#play-romance4').fadeOut(300);
		});

		$(".romance5").mouseenter(function(){
			$('#play-romance5').fadeIn('slow');
		});
		$(".romance5").mouseleave(function(){
			$('#play-romance5').fadeOut(300);
		});

		$(".romance6").mouseenter(function(){
			$('#play-romance6').fadeIn('slow');
		});
		$(".romance6").mouseleave(function(){
			$('#play-romance6').fadeOut(300);
		});

		$(".romance7").mouseenter(function(){
			$('#play-romance7').fadeIn('slow');
		});
		$(".romance7").mouseleave(function(){
			$('#play-romance7').fadeOut(300);
		});

		$(".romance8").mouseenter(function(){
			$('#play-romance8').fadeIn('slow');
		});
		$(".romance8").mouseleave(function(){
			$('#play-romance8').fadeOut(300);
		});
	}
	catOne();

	function catTwo() {
		$('.play-landing').fadeOut(1);

		$(".animados1").mouseenter(function(){
			$('#play-animados1').fadeIn('slow');
		});
		$(".animados1").mouseleave(function(){
			$('#play-animados1').fadeOut(300);
		});

		$(".animados2").mouseenter(function(){
			$('#play-animados2').fadeIn('slow');
		});
		$(".animados2").mouseleave(function(){
			$('#play-animados2').fadeOut(300);
		});

		$(".animados3").mouseenter(function(){
			$('#play-animados3').fadeIn('slow');
		});
		$(".animados3").mouseleave(function(){
			$('#play-animados3').fadeOut(300);
		});

		$(".animados4").mouseenter(function(){
			$('#play-animados4').fadeIn('slow');
		});
		$(".animados4").mouseleave(function(){
			$('#play-animados4').fadeOut(300);
		});

		$(".animados5").mouseenter(function(){
			$('#play-animados5').fadeIn('slow');
		});
		$(".animados5").mouseleave(function(){
			$('#play-animados5').fadeOut(300);
		});

		$(".animados6").mouseenter(function(){
			$('#play-animados6').fadeIn('slow');
		});
		$(".animados6").mouseleave(function(){
			$('#play-animados6').fadeOut(300);
		});

		$(".animados7").mouseenter(function(){
			$('#play-animados7').fadeIn('slow');
		});
		$(".animados7").mouseleave(function(){
			$('#play-animados7').fadeOut(300);
		});

		$(".animados8").mouseenter(function(){
			$('#play-animados8').fadeIn('slow');
		});
		$(".animados8").mouseleave(function(){
			$('#play-animados8').fadeOut(300);
		});
	}
	catTwo();

	// Modal for News

	$("#play-landing1").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/grey.jpg");
		$("#modal > .modal-content > img").attr("alt", "50 Shades Freed");
	});
	$("#play-landing2").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/dbs.jpg");
		$("#modal > .modal-content > img").attr("alt", "Dragon Ball Super Broly");
	});
	$("#play-landing3").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/bajo_la_misma_star.jpg");
		$("#modal > .modal-content > img").attr("alt", "Bajo la misma estrella");
	});
	$("#play-landing4").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/dory.jpg");
		$("#modal > .modal-content > img").attr("alt", "Buscando a Dory");
	});
	$("#play-landing5").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/stand_de_besos.jpg");
		$("#modal > .modal-content > img").attr("alt", "El stand de los besos");
	});

	// Modal for Romance

	$("#play-romance1").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/grey.jpg");
		$("#modal > .modal-content > img").attr("alt", "50 Shades Freed");
	});
	$("#play-romance2").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/bajo_la_misma_star.jpg");
		$("#modal > .modal-content > img").attr("alt", "Bajo la misma estrella");
	});
	$("#play-romance3").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/stand_de_besos.jpg");
		$("#modal > .modal-content > img").attr("alt", "El stand de los besos");
	});
	$("#play-romance4").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/riverdale.jpg");
		$("#modal > .modal-content > img").attr("alt", "Riverdale");
	});
	$("#play-romance5").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/amar.jpg");
		$("#modal > .modal-content > img").attr("alt", "Amar");
	});
	$("#play-romance6").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/romance/ibiza.jpg");
		$("#modal > .modal-content > img").attr("alt", "Ibiza");
	});

	// Modal for Animados

	$("#play-animados1").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/shrek.jpg");
		$("#modal > .modal-content > img").attr("alt", "Shrek");
	});
	$("#play-animados2").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/dbs.jpg");
		$("#modal > .modal-content > img").attr("alt", "Dragon Ball Super Broly");
	});
	$("#play-animados3").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/dory.jpg");
		$("#modal > .modal-content > img").attr("alt", "Buscando a Dory");
	});
	$("#play-animados4").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/nemo.jpg");
		$("#modal > .modal-content > img").attr("alt", "Buscando a Nemo");
	});
	$("#play-animados5").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/madagascar.jpg");
		$("#modal > .modal-content > img").attr("alt", "Madagascar 3");
	});
	$("#play-animados6").click(function() {
		$("#modal > .modal-content > img").attr("src", "res/animados/los_increibles.jpg");
		$("#modal > .modal-content > img").attr("alt", "Los Increíbles");
	});

});