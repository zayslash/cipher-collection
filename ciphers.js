var textbox = document.getElementById("text-box");
var submit = document.getElementById("submit");
var result = document.getElementById("results");
var Title = document.getElementById("title");
var DOM_shift = document.getElementById("shift");
var method = document.getElementById("operation");
var right_button = document.getElementById("right");
var left_button = document.getElementById("left");



var method_specification = "Encode";

var menuPosition = ["Caesar Cipher" , "Vigenere Cipher"];
let position = 0;

var display = function(){

  if (menuPosition[position] === "Caesar Cipher"){

    DOM_shift.type = "number";
    Title.innerHTML = menuPosition[position];

  }
   else if (menuPosition[position] === "Vigenere Cipher") {

     DOM_shift.type = "textbox";
     Title.innerHTML = menuPosition[position];
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


// Caesar Cipher------------------------------------------------------------------------

var caesarCipher = function(text, shift,method){
var citext = "";
  if(method === "Encode"){
   for (let i = 0; i < text.length; i++){
      if(text[i] === " "){
        citext += " ";
        //i++;
      }
      else{
       citext += codeToAscii(ascii(text[i]) + shift);
       // console.log(codeToAscii((ascii(text[i]))));
     }
   }
return citext;
} else{
for (let i = 0; i < text.length; i++){
   if(text[i] === " "){
     citext += " ";
     //i++;
   }
   else{
    citext += codeToAscii(ascii(text[i]) - shift);
    console.log(codeToAscii((ascii(text[i]))));
  }
}
return citext;
}
}

// Vigenere Cipher-----------------------------------------------------------------------

var VigenereCipher = function(text,key,method){

text = text.toLowerCase();
var citext = "";
var newKey = "";

let z =0;
let hold =0;

for (let i =0; i < text.length + hold; i++){

   if (z === key.length ){
     z = 0;
     hold++;
 } else {

    newKey += key[z];
    z++;
  }
}

console.log(newKey);

if (method === "Encode"){
    for (let i =0; i < text.length; i++){
      if(text[i] === " "){
        citext += " ";
        //i++;
      }

      else{
       citext += codeToAscii(((ascii(text[i]) - 64  + ascii(newKey[i])) % 26) + 97);
       console.log(((ascii(text[i]) - 64  + ascii(newKey[i])) % 26) + 97);
     }
    }
    return citext;
  }else{
    for (let i =0; i < text.length; i++){
      if(text[i] === " "){
        citext += " ";
        //i++;
      }
      else{
       citext += codeToAscii(((ascii(text[i])  - ascii(newKey[i]) + 26) % 26) + 97);
       console.log(codeToAscii((ascii(text[i]))));
     }
    }
   return citext;
  }

console.log(citext);
}


var function_loader = function(textdata){

  if (menuPosition[position] === "Caesar Cipher"){
    return  caesarCipher(textdata,parseInt(DOM_shift.value), method_specification);
  }
   else if (menuPosition[position] === "Vigenere Cipher") {

    return  VigenereCipher(textdata,DOM_shift.value, method_specification)
   }

}


submit.onclick = function(){
let textdata = textbox.value;
result.innerHTML = function_loader(textdata);
}


right_button.onclick = function(){
if (position === menuPosition.length - 1){
        position = 0;
     }else{
  position++;
}
  display();
}

left_button.onclick = function(){
if(position === 0){
   position = menuPosition.length - 1;
}else{
  position--;
}
  display();
}

function loaders(){
  display();
   // Title.innerHTML = menuPosition[position];
   // VigenereCipher("omstvboqz","hi","Decode")

}

loaders();
