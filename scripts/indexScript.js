
$(document).ready(function(){

    var theParent = document.querySelector("#calculator");
    theParent.addEventListener("click", getButton, false);
    //var input = document.getElementById("screen");
     
    function getButton(e) {
        if (e.target !== e.currentTarget) {

            //alert("Hello " + clickedItem);
            //alert("hello" + clickedValue);            
            //var clickedItem = e.target.id;
            var clickedValue = e.target.value;            
            var screenInput = document.getElementById('screen');
            screenInput.value += clickedValue;
        }
        e.stopPropagation();
    }
  
})





