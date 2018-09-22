//NAME: ZANIF SANDY (ZAYSLASH)

var textbox = document.getElementById("text-box");
var submit = document.getElementById("submit");
var result = document.getElementById("results");
var Title = document.getElementById("title");
var DOM_shift = document.getElementById("shift");
var method = document.getElementById("operation");
var right_button = document.getElementById("right");
var left_button = document.getElementById("left");

var method_specification = "Encode";
var menuStack = new Stack();
var backwardStack = new Stack();

menuStack.push("Auto Key Cipher");
menuStack.push("Atbash Cipher");
menuStack.push("ROT13");
menuStack.push("Vigenere Cipher");
menuStack.push("Caesar Cipher");

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
   else if (menuStack.peek() === "Atbash Cipher") {

     DOM_shift.type = "none";
     Title.innerHTML = menuStack.peek();
   }
   else if (menuStack.peek() === "Auto Key Cipher") {

     DOM_shift.type = "textbox";
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

    return  ROT13(textdata);
   }
   else if (menuStack.peek() === "Atbash Cipher") {

    return  AtbashCipher(textdata, method_specification);
   }
   else if (menuStack.peek() === "Auto Key Cipher") {

    return  AutoKeyCipher(textdata, DOM_shift.value, method_specification);
   }

}

submit.onclick = function(){
let textdata = textbox.value;
result.innerHTML = function_loader(textdata);
download_file(function_loader(textdata),`z${FileName}`,'text/plain')
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
