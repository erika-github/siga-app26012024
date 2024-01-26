
jQuery(function(){
    

    //var video_ = document.getElementsByTagName('video');

    var videoLandscape = document.getElementsByClassName('video1');

    var videoPortrait = document.getElementsByClassName('video2')


    //$('video').get(0).pause();

    $(videoLandscape).get(0).pause();
    $(videoPortrait).get(0).pause();
   

    var play_ = document.getElementById("play");

    play_?.addEventListener("mouseover", () => {

        $('#play').css("width", "10.5%");


    });

    play_?.addEventListener("mouseout", () => {

        $('#play').css("width", "10%");



    });    

        var imgItems = $('.slider li').length;
        var imgItems_ = $('.slider_ li').length;
        var imgPos = 1;
        
        $('.slider li').hide();
        $('.slider li:first').show();

        $('.slider_ li').hide();
        $('.slider_ li:first').show();
   
    $('.pagination li:first').css({ 'color': '#CD6E2E' });
    $('.pagination li').click(pagination);

    var myTimer = setInterval(nextSlider, 4000);

    function pagination() {

        $('#play').css("display", "none");

        var paginationPos = $(this).index() + 1;       

        
            $('.slider li').hide();
            $('.slider li:nth-child(' + paginationPos + ')').fadeIn();        
          
            $('.slider_ li').hide();
            $('.slider_ li:nth-child(' + paginationPos + ')').fadeIn();
       
        $('.pagination li').css({ 'color': '#7f7679' });

        $(this).css({ 'color': '#CD6E2E' });

        imgPos = paginationPos;

        if (paginationPos == imgItems|| paginationPos== imgItems_) {

            $('#play').css("display", "none");
            clearInterval(myTimer);
            myTimer = setInterval(nextSlider, 15000);


            /*if (video_[0]) {

                $('video').get(0).currentTime = 0;

            }*/

            if (videoLandscape[0]|| videoPortrait[0]) {

                $('videoLandscape').currentTime = 0;
                $('videoPortrait').currentTime = 0;

            }


            //$('video').get(0).play();

            $(videoLandscape).get(0).play();
            $(videoPortrait).get(0).play();


        }

    }


    function nextSlider() {

        const urlInic = window.location.protocol + '//' + window.location.hostname + ':' + window.location.port +
            window.location.pathname;

        //if(urlInic=='http://localhost:4200/siga'|| urlInic=='http://localhost:4200/siga#' ){

        $('#play').css("display", "none");
        clearInterval(myTimer);
        myTimer = setInterval(nextSlider, 4000);


        if (imgPos >= imgItems||imgPos >= imgItems_ ) {

            imgPos = 1;



        } else {

            imgPos++;


            if (imgPos == imgItems|| imgPos == imgItems_) {


               /* if (video_[0]) {

                    if ($('video').get(0).currentTime == 0) {

                        $('#play').css("display", "block");


                    }



                    if ($('video').get(0).currentTime > 0) {

                        $('video').get(0).play();


                    }*/


                    if (videoLandscape[0]||videoPortrait[0]) {

                        if ($(videoLandscape).get(0).currentTime == 0||$(videoPortrait).get(0).currentTime == 0) {
    
                            $('#play').css("display", "block");
    
    
                        }
    
    
    
                        if ($(videoLandscape).get(0).currentTime > 0||$(videoPortrait).get(0).currentTime > 0) {
    
                            $(videoLandscape).get(0).play();
                            $(videoPortrait).get(0).play();
    
    
                        }

                }

                clearInterval(myTimer);
                myTimer = setInterval(nextSlider, 15000);


                /*if (video_[0]) {

                    $('video').get(0).currentTime = 0;

                }*/

                if (videoLandscape[0]||videoPortrait[0]) {

                    $(videoLandscape).get(0).currentTime = 0;
                    $(videoPortrait).get(0).currentTime = 0;

                }


                var play_ = document.getElementById("play");
                play_?.addEventListener("click", () => {

                    play_.style.display = "none";

                    clearInterval(myTimer);
                    myTimer = setInterval(nextSlider, 15000);

                    if(videoLandscape[0]||videoPortrait[0]){

                        $(videoLandscape).get(0).currentTime = 0;
                        $(videoPortrait).get(0).currentTime = 0;

                    }

                    $(videoLandscape).get(0).play();
                    $(videoPortrait).get(0).play();


                    /*if (video_[0]) {
                

                        $('video').get(0).currentTime = 0;

                    }*/

                    //$('video').get(0).play();

                })



            }

        }



        $('.pagination li').css({ 'color': '#858585' });
        $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#CD6E2E' });
       
            $('.slider li').hide();
            $('.slider li:nth-child(' + imgPos + ')').fadeIn();       
            
            $('.slider_ li').hide();
            $('.slider_ li:nth-child(' + imgPos + ')').fadeIn();

    

        function prevSlider() {

            clearInterval(myTimer);
            myTimer = setInterval(nextSlider, 4000);

            if (imgPos <= 1) {

                imgPos = imgItems;
                imgPos = imgItems_;
                clearInterval(myTimer);
                myTimer = setInterval(nextSlider, 15000);

                /*if (video_[0]) {

                    $('video').get(0).currentTime = 0;

                }*/
                if(videoLandscape[0]||videoPortrait[0]){

                    $(videoLandscape).get(0).currentTime = 0;
                    $(videoPortrait).get(0).currentTime = 0;

                }

            } else {

                imgPos--;

            }

            $('.pagination li').css({ 'color': '#858585' });
            $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#CD6E2E' });

           
                $('.slider li').hide();
                $('.slider li:nth-child(' + imgPos + ')').fadeIn();           
              
                $('.slider_ li').hide();
                $('.slider_ li:nth-child(' + imgPos + ')').fadeIn();
            

        }

        // }

    }




})
