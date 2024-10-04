var a = 1
var reset = false;
var array = ["Diego","Mafe","Sharon","Naomi","Francesca","Rodrigo","Maria Micheva", "Mareike","Max","Robin","Nancy","Emilie","Mao", "María Martínez", "Anton"];

function animate(){
var canv = document.getElementById("canv");
var $ = canv.getContext("2d");
//assign inputs to variables on reset (new drawing)
  if(reset){
    a = document.getElementById('inputa').value;
    $.writeln("your secret friend is: "+array[a]);
    reset = false;
  }
  
  setTimeout("animate();",10);
}

//reset canvas if set button is clicked
function set(){
  reset = true;
}
