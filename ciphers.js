var textbox = document.getElementById("text-box");
var submit = document.getElementById("submit");
var result = document.getElementById("results");
var Title = document.getElementById("title");
var DOM_shift = document.getElementById("shift");
var method = document.getElementById("operation");
var method_specification = "Encode";

var menuPosition = ["Caesar Cipher"];
let position = 0;

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



// Caesar Cipher --------------------------------------------------
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
var citext = "";
var newKey = "";
let z =0;
let hold =0;
for (let i =0; i < text.length + hold; i++){
   if (z === key.length ){
     z = 0;
     hold++;

 }else{
    newKey += key[z];
    z++;}
}

// console.log(newKey);

for (let i =0; i < text.length; i++){
  if(text[i] === " "){
    citext += " ";
    //i++;
  }
  else{
   citext += codeToAscii((ascii(text[i])  + ascii(newKey[i])) % 26 + 97);
   console.log(codeToAscii((ascii(text[i]))));
 }

}
//return citext;
console.log(citext);
}


submit.onclick = function(){
let textdata = textbox.value;
result.innerHTML = caesarCipher(textdata,parseInt(DOM_shift.value), method_specification);
}

function loaders(){
   Title.innerHTML = menuPosition[position];
   VigenereCipher("hellothis","hi","ckd")

}

loaders();
