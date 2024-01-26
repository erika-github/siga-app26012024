
jQuery(function(){


    $("body").css({
        "background-image": "url('/assets/images/background_.png')",
        "background-size": "cover",
        "background-position": "12%"
    });


    var clicked = false;

    
    $('#iniciar div').click(function () {

              
        $(".box-content").toggle("fade");
        $(".form").toggle("fade");
        $("body").css({ "background-image": "none" });
        $("body").css("background-color", "rgba(30, 39, 73,0.4)");
        $("img").css("opacity", "0.4");
        $("#quienesSomos").css("opacity", "0.4");
        $("#enfoque").css("opacity", "0.4");
        $("#caracteristicas").css("opacity", "0.4");
        $("#oficina").css("opacity", "0.4");
        $("footer").css("opacity", "0.4");
        $('video').css("filter", "opacity(30%)");
        clicked = true;
        evaluar();
    });

    function evaluar() {

        if (clicked = true) {

            $('#iniciar div').css("display", "none");

        }


    }

    function cerrar() {
        
        $(".box-content").hide();
        $(".form").hide();
        $("body").css({ "background-image": "url('/assets/images/background_.png')" });
        $("img").css("opacity", "1");
        $("#quienesSomos").css("opacity", "1");
        $("#enfoque").css("opacity", "1");
        $("#caracteristicas").css("opacity", "1");
        $("#oficina").css("opacity", "1");
        $("footer").css("opacity", "0.6");
        $('video').css("filter", "opacity(100%)");
        $('#iniciar div').css("display", "block");
        $('#iniciar div').css('margin', 'auto');

        errorUsuario.style.display = "none";

        errorPassword.style.display = "none";

        $("input[type='text']").val('');

        $("input[type='password']").val('');


        $('.form_label').css('position', 'absolute')

            .css('cursor', 'pointer')

            .css('top', '0')

            .css('left', '5px')

            .css('transform', 'translateY(10px)')

            .css('transition', 'transform .5s, color .3s')

            .css('color', '#5757577e');

        clicked = false;



    }

    $('#cerrar_').click(function () {

        $('.form').scrollTop(0,0); 

        cerrar();

    })

    $('#cerrar').click(function () {

        $('.form').scrollTop(0,0); 

        cerrar();


    });



})

