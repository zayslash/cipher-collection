var textbox = document.getElementById("text-box");
var submit = document.getElementById("submit");
var result = document.getElementById("results");
var Title = document.getElementById("title");
var menuPosition = ["Caesar Cipher"];
let position = 0;

function ascii (a) { return a.charCodeAt(0); }

function codeToAscii(number){
    return String.fromCharCode(number);
}


var caesarCipher = function(text, shift){
  var citext = "";
   for (let i = 0; i < text.length; i++){
       citext += codeToAscii(ascii(text[i]) + shift);
       console.log(codeToAscii((ascii(text[i]))));
   }
return citext;

}


submit.onclick = function(){
let textdata = textbox.value;
result.innerHTML = caesarCipher(textdata,2);
}

function loaders(){
   Title.innerHTML = menuPosition[position];



}

loaders();
