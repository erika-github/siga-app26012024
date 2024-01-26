
jQuery(function(){

	const urlInic = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port +
		window.location.pathname;


	window.location.href = urlInic + "#";


	$(window).on('scroll', function () {

		if ($(window).scrollTop() > 1) {

			$('#stickyMenu').addClass('menu-fixed');

			$('#stickyMenu').show();

			$('#mainMenu').hide();

			ubicacion();

		} else {


			$('#stickyMenu').addClass('menu-fixed');

			$('#stickyMenu').hide();

			$('#mainMenu').show();		


		}

	})


/*  función que va a permitir que se haga la navegación por las secciones 
	de la página correctamente.*/

	function ubicacion() {

		var URL = window.location.href;


		if (URL == urlInic + "#login") {

			window.location.href = urlInic + "#login/";


		} else if (URL == urlInic + "#aboutUs") {

			window.location.href = urlInic + "#aboutUs/";


		} else if (URL == urlInic + "#approach") {

			window.location.href = urlInic + "#approach/";


		} else if (URL == urlInic + "#features") {

			window.location.href = urlInic + "#features/";


		} else if (URL == urlInic + "#office") {

			window.location.href = urlInic + "#office/";


		}

	}



})
