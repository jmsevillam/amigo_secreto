var a = -1.3
var reset = false;

function animate(){

//assign inputs to variables on reset (new drawing)
  if(reset){
    a = document.getElementById('inputa').value;

    reset = false;
  }
  
  setTimeout("animate();",10);
}

//reset canvas if set button is clicked
function set(){
  reset = true;
}
