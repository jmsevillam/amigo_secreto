var a = 123
var reset = false;
var array = ["Diego","Mafe","Sharon","Naomi","Francesca","Rodrigo","Maria Micheva", "Mareike","Max","Robin","Nancy","Emilie","Mao", "María Martínez", "Anton"];
var code = {123 :0, 456 :1, 789 :2,147 :3,258 :4, 369 :5,1230 :6,4560 :7,7890 :8,1470 :9,2580 :10,3690 :11,159 :12,1590 : 13,357 :14};

const canv = document.getElementById("canv");
const $ = canv.getContext("2d");

$.fillText("your secret friend is: "+array[code[a]]);
function animate(){

//assign inputs to variables on reset (new drawing)
  if(reset){
    a = document.getElementById('inputa').value;
    //document.writeln("your secret friend is: "+array[code[a]], 10, 90);
    $.font = "50px Arial";
    $.fillStyle = "red";
    $.fillText("your secret friend is: "+array[code[a]]);
    var charStr = String.fromCharCode("your secret friend is: "+array[code[a]]);
    alert("Test");


ctx.font = "20px Georgia";
ctx.fillText("Hello World!", 10, 50);
    
    reset = false;
  }
  
  setTimeout("animate();",10);
}

//reset canvas if set button is clicked
function set(){
  reset = true;
}
