//NAME: ZANIF SANDY (ZAYSLASH)

var textbox = document.getElementById("text-box");
var submit = document.getElementById("submit");
var result = document.getElementById("results");
var Title = document.getElementById("title");
var DOM_shift = document.getElementById("shift");
var method = document.getElementById("operation");
var right_button = document.getElementById("right");
var left_button = document.getElementById("left");


var caesar = {
  name: "Caesar Cipher",
  DOM_shift: "number",
  Title: name,
};

var Vigenere = {
  name: "Vigenere Cipher",
  DOM_shift: "textbox",
  Title: name,
};


var ROT13 = {
  name: "ROT13",
  DOM_shift: "textbox",
  Title: name,
};



  console.log(caesar.name);


var method_specification = "Encode";
var menuStack = new Stack();
var backwardStack = new Stack();

menuStack.push("ROT13");
menuStack.push("Vigenere Cipher");
menuStack.push("Caesar Cipher");

var menuPosition = ["Caesar Cipher" , "Vigenere Cipher", "ROT13"];
let position = 0;

var display = function(){

  if (menuStack.peek() === "Caesar Cipher"){

    DOM_shift.type = "number";
    Title.innerHTML = menuStack.peek();

  }
   else if (menuStack.peek() === "Vigenere Cipher") {

     DOM_shift.type = "textbox";
     Title.innerHTML = menuStack.peek();
   }
   else if (menuStack.peek() === "ROT13") {

     DOM_shift.type = "none";
     Title.innerHTML = menuStack.peek();
   }
}


method.onclick = function(){
  if (method.innerHTML === "Encode"){
    method.innerHTML = "Decode";
    method_specification = "Encode";
        submit.value = "Encode";
  }else{
    method.innerHTML = "Encode";
    submit.value = "Decode";
    method_specification = "Decode";
  }
}


function ascii (a) { return a.charCodeAt(0); }

function codeToAscii(number){
    return String.fromCharCode(number);
}


var function_loader = function(textdata){

  if (menuStack.peek() === "Caesar Cipher"){
    return  caesarCipher(textdata,parseInt(DOM_shift.value), method_specification);
  }
   else if (menuStack.peek() === "Vigenere Cipher") {

    return  VigenereCipher(textdata,DOM_shift.value, method_specification)
   }
   else if (menuStack.peek() === "ROT13") {

    return  caesarCipher(textdata,13, method_specification);
   }

}


submit.onclick = function(){
let textdata = textbox.value;
result.innerHTML = function_loader(textdata);
}

var clicks = 0; // keeps count of backward left clicks

right_button.onclick = function(){

  if (clicks > 0){
    var temp = menuStack;
    menuStack = backwardStack;
    backwardStack = temp;
    clicks = 0;
  }else{
  backwardStack.push(menuStack.peek())
  menuStack.pop()
}
  display();

}

left_button.onclick = function(){

if (clicks == 0){
  var temp = menuStack;
  menuStack = backwardStack;
  backwardStack = temp;
  clicks++
}
else{
  backwardStack.push(menuStack.peek())
  menuStack.pop()
  clicks++;
}

  display();
}

function loaders(){
  display();
   // Title.innerHTML = menuPosition[position];
   // VigenereCipher("omstvboqz","hi","Decode")

}

loaders();