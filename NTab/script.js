var text = "";

$(document).ready(function() {
var img = Math.round(Math.random()*9) + 1;
document.getElementById("backgroundImage").style.backgroundImage = "url(images/" + img + ".jpg)";

  $('input').keypress(function(event) {

    if (event.keyCode == 13) {
      event.preventDefault();
      text = document.getElementById("input").value;
      console.log(typeof text);
      if(text == ".q"){
          location.href = "https://repl.it/@EhsanPatel/unreleased";
      }
      else if(text == ".n"){
          location.href = "https://note.ehsanpatel.repl.co/";
      }
      else if(text == ".a"){
          location.href = "https://amazon.ca/";
      }
      else if(text == ".c"){
          location.href = "https://www.google.com/search?q=calculator&rlz=1C1CHBF_enCA885CA885&oq=calculator&aqs=chrome..69i57j35i39j0j69i60l3j69i65l2.3830j0j7&sourceid=chrome&ie=UTF-8";
      }
      else if(text != ""){
          location.href = "https://www.google.com/search?q=" + text;
      }
    }
  });


// var d = new Date();
// document.getElementById("timeH").innerHTML = d.getHours();
// document.getElementById("timeM").innerHTML = d.getMinutes();
});