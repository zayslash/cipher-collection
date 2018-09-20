//NAME: ZANIF SANDY (ZAYSLASH)

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
