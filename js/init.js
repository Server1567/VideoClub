// Codigo de Inicializaciones de Eventos

$(document).ready(function(){
	// Inicializaciones de usos de Materialize
    $('.sidenav').sidenav();
    $('.modal').modal({
    	preventScrolling: true,
    	dismissible: true
    });

    $(".slick-arrow").remove();

    // Inicializacion de carruseles usando la Librería Slick
	$('.news-carousel').slick({
		dots: true,
		infinite: true,
		speed: 700,
		arrows: false,
		nextArrow: "<div class='slick-next'></div>",
		prevArrow: "<div class='slick-prev'></div>",
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true
			}

		}, {

			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				dots: true,
			}

		}, {
			breakpoint: 500,
			settings:{
				slidesToShow: 1,
				dots: true,
			}

		}, {

			breakpoint: 300,
			settings: "unslick" // destroys slick
		}]
	});

	$('.romance-carousel').slick({
		dots: false,
		infinite: true,
		speed: 700,
		arrows: true,
		nextArrow: "<div class='slick-next'></div>",
		prevArrow: "<div class='slick-prev'></div>",
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true
			}

		}, {

			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				dots: true,
				arrows: true
			}

		}, {
			breakpoint: 500,
			settings:{
				slidesToShow: 1,
				dots: true,
				arrows: false
			}

		}, {

			breakpoint: 300,
			settings: "unslick" // destroys slick
		}]
	});

	$('.animados-carousel').slick({
		dots: false,
		infinite: true,
		speed: 700,
		arrows: true,
		nextArrow: "<div class='slick-next'></div>",
		prevArrow: "<div class='slick-prev'></div>",
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [{

			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				infinite: true
			}

		}, {

			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				dots: true,
				arrows: true
			}

		}, {
			breakpoint: 500,
			settings:{
				slidesToShow: 1,
				dots: true,
				arrows: false
			}

		}, {

			breakpoint: 300,
			settings: "unslick" // destroys slick
		}]
	});

});