var textbox = document.getElementById("text-box");
var submit = document.getElementById("submit");
var result = document.getElementById("results");
var Title = document.getElementById("title");
var DOM_shift = document.getElementById("shift");
var method = document.getElementById("operation");
var method_specification = "Encode";

var menuPosition = ["Caesar Cipher"];
let position = 0;

console.log(method.innerHTML);
method.onclick = function(){
  if (method.innerHTML === "Encode"){
    method.innerHTML = "Decode";
    method_specification = "Encode"

        submit.value = "Encode"
  }else{
    method.innerHTML = "Encode";
    submit.value = "Decode"
    method_specification = "Decode"
  }
}

function ascii (a) { return a.charCodeAt(0); }

function codeToAscii(number){
    return String.fromCharCode(number);
}

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
       console.log(codeToAscii((ascii(text[i]))));
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


submit.onclick = function(){
let textdata = textbox.value;
result.innerHTML = caesarCipher(textdata,parseInt(DOM_shift.value), method_specification);
}

function loaders(){
   Title.innerHTML = menuPosition[position];


}

loaders();
