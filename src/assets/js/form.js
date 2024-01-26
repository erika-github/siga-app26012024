
jQuery(function(){

	
    var passwLabel = $('#ps');
	var userLabel = $('#us');
	var errorUsuario = document.querySelector('#errorUsuario');
	var errorPassword = document.querySelector('#errorPassword');



	$('#password').focus(function () {


		errorPassword.style.display = "none";

		passwLabel.css('transform', 'translateY(-12px) scale(.7)')
			.css('transform-origin', 'left top')		
			.css('color','#3f9ccf');
			

		var userValue = $('#user').val();


		if (userValue.trim() == null || userValue.trim().length == 0) {

			userLabel.css('position', 'absolute')

				.css('cursor', 'pointer')

				.css('top', '0')

				.css('left', '5px')

				.css('transform', 'translateY(10px)')

				.css('transition', 'transform .5s, color .3s')

				.css('color', '#5757577e');
		}


	});




	$('#user').focus(function () {

		errorUsuario.style.display = "none";


		userLabel.css('transform', 'translateY(-12px) scale(.7)')
			.css('transform-origin', 'left top')			
			.css('color','#3f9ccf');


		var passwValue = $('#password').val();


		if (passwValue.trim() == null || passwValue.trim().length == 0) {

			passwLabel.css('position', 'absolute')

				.css('cursor', 'pointer')

				.css('top', '0')

				.css('left', '5px')

				.css('transform', 'translateY(10px)')

				.css('transition', 'transform .5s, color .3s')

				.css('color', '#5757577e');
		}

	})

    $('#password').focusout(function () {


		var passwValue = $('#password').val();


		if (passwValue.trim() == null || passwValue.trim().length == 0) {

			passwLabel.css('position', 'absolute')

				.css('cursor', 'pointer')

				.css('top', '0')

				.css('left', '5px')

				.css('transform', 'translateY(10px)')

				.css('transition', 'transform .5s, color .3s')

				.css('color', '#5757577e');

		}

	})

	$('#user').focusout(function () {


		var userValue = $('#user').val();


		if (userValue.trim() == null || userValue.trim().length == 0) {

			userLabel.css('position', 'absolute')

				.css('cursor', 'pointer')

				.css('top', '0')

				.css('left', '5px')

				.css('transform', 'translateY(10px)')

				.css('transition', 'transform .5s, color .3s')

				.css('color', '#5757577e');

		}


	})



})