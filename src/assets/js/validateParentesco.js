

  jQuery(function(){
 

    var valParentesco = document.getElementById('parentesco');
    var selectParentesco = valParentesco.options[valParentesco.selectedIndex].text;
    var valSpanParentRpr = document.getElementById('spanParentRpr');

  
    ///////////////////////////////////////////////////


    if (valParentesco !== null && selectParentesco === "--Select--") {

      valSpanParentRpr.style.display = "block";
      valSpanParentRpr.style.color = "red";
      valParentesco.style.border = "2px solid red"


    } else {

      valSpanParentRpr.style.display = "none";
      valParentesco.style.border = "1px solid lightGray"

    }


    valParentesco.addEventListener("change", () => {

      valSpanParentRpr.style.display = "none";
      valParentesco.style.border = "1px solid lightGray"

    })


    

})

