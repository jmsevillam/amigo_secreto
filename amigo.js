var a = 1
var reset = false;
var array = ["Diego","Mafe","Sharon","Naomi","Francesca","Rodrigo","Maria Micheva", "Mareike","Max","Robin","Nancy","Emilie","Mao", "María Martínez", "Anton"];
var code = {123 :0, 456 :1, 789 :2,147 :3,258 :4, 369 :5,1230 :6,4560 :7,7890 :8,1470 :9,2580 :10,3690 :11,159 :12,1590 : 13,357 :14};

function animate(){
var canv = document.getElementById("canv");
var $ = canv.getContext("2d");
//assign inputs to variables on reset (new drawing)
  if(reset){
    a = document.getElementById('inputa').value;
    //document.writeln("your secret friend is: "+array[code[a]], 10, 90);
    $.font = "50px Arial";
    $.fillText("your secret friend is: "+array[code[a]]);
    
    reset = false;
  }
  
  setTimeout("animate();",10);
}

//reset canvas if set button is clicked
function set(){
  reset = true;
}
