/*función addEventListener con javaScript:
window.addEventListener("load", function () {*/

/* Metodo deprecado con jQuery:
//$(document).ready(() => {*/
        
jQuery(function(){       


        deshabilitaRetroceso();


        function deshabilitaRetroceso() {
                window.location.hash = "#";
                window.location.hash = "Again-No-back-button" 
                window.onhashchange = function () { window.location.hash = "#"; }
        }


        const body = document.getElementsByClassName("fondoMobile")[0];
        


        document.getElementsByClassName("items")[0]?.addEventListener("mouseover", function () {
       

                document.getElementsByClassName("subElements")[0].style.display = "block";

        })


        document.getElementsByClassName("items")[1]?.addEventListener("mouseover", function () {
        
                document.getElementsByClassName("subElements")[1].style.display = "block";

        })

        document.getElementsByClassName("items")[2]?.addEventListener("mouseover", function () {
    

                document.getElementsByClassName("subElements")[2].style.display = "block";

        })



        document.getElementsByClassName("items")[3]?.addEventListener("mouseover", function () {
      

                document.getElementsByClassName("subElements")[3].style.display = "block";

        })


        document.getElementsByClassName("items")[0]?.addEventListener("mouseout", function () {
        

                document.getElementsByClassName("subElements")[0].style.display = "none";

        })


        document.getElementsByClassName("items")[1]?.addEventListener("mouseout", function () {
        

                document.getElementsByClassName("subElements")[1].style.display = "none";

        })

        document.getElementsByClassName("items")[2]?.addEventListener("mouseout", function () {
      

                document.getElementsByClassName("subElements")[2].style.display = "none";

        })


        document.getElementsByClassName("items")[3]?.addEventListener("mouseout", function () {
      

                document.getElementsByClassName("subElements")[3].style.display = "none";

        })

        document.getElementById("sImage")?.addEventListener("mouseover", function () {
    

                document.getElementById("perfil").style.display = "block";

        })

        document.getElementById("cinta")?.addEventListener("mouseover", function () {
      

                document.getElementById("perfil").style.display = "none";

        })


       
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////Funciones del menú hamburguesa para equipos móviles////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       


        document.getElementsByClassName("menuH")[0]?.addEventListener("click", function () {


                document.getElementById("menuMobile").style.display = "block";

                body.style.display = "block";
                body.style.background = "black";
                body.style.opacity = 0.5;


        })



        document.getElementsByClassName("fondoMobile")[0]?.addEventListener("click", function () {

       
                document.getElementById("menuMobile").style.display = "none";
                document.getElementById("subM_MobPeople").style.display = "none";
                document.getElementById("subM_MobSetting").style.display = "none";
                document.getElementById("subM_MobRatings").style.display = "none";
                document.getElementById("subM_MobSecurity").style.display = "none";
                body.style.display = "none";

        })


       

                document.getElementById("people")?.addEventListener("click", function () {

               

                document.getElementById("subM_MobPeople").style.display = "block";
                document.getElementById("menuMobile").style.display = "none";


        })


       
                document.getElementsByClassName("menuMobBlue")[0]?.addEventListener("click", function () {

                document.getElementById("menuMobile").style.display = "block";
                document.getElementById("subM_MobPeople").style.display = "none";


        })


        document.getElementById("setting")?.addEventListener("click", function () {
        

                document.getElementById("subM_MobSetting").style.display = "block";
                document.getElementById("menuMobile").style.display = "none";


        })


      

        document.getElementsByClassName("menuMobBlue")[1]?.addEventListener("click", function () {
      

                document.getElementById("menuMobile").style.display = "block";
                document.getElementById("subM_MobSetting").style.display = "none";


        })



        document.getElementById("ratings")?.addEventListener("click", function () {
        

                document.getElementById("subM_MobRatings").style.display = "block";
                document.getElementById("menuMobile").style.display = "none";


        })


      
        document.getElementsByClassName("menuMobBlue")[2]?.addEventListener("click", function () {
      

                document.getElementById("menuMobile").style.display = "block";
                document.getElementById("subM_MobRatings").style.display = "none";


        })

        document.getElementById("security")?.addEventListener("click", function () {
      

                document.getElementById("subM_MobSecurity").style.display = "block";
                document.getElementById("menuMobile").style.display = "none";


        })


        
        document.getElementsByClassName("menuMobBlue")[3]?.addEventListener("click", function () {


                document.getElementById("menuMobile").style.display = "block";
                document.getElementById("subM_MobSecurity").style.display = "none";


        })



})