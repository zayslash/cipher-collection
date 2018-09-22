function ascii (a) { return a.charCodeAt(0); }

function codeToAscii(number){
    return String.fromCharCode(number);
}


var AutoKeyCipher = function(text,key,method){

text = text.toLowerCase();
var citext = "";
var newKey = "";

let z =0;
let hold =0;


if (key.length <= text.length){
    newKey = key;
    for(let i = 0; i < (text.length - key.length); i++){
      newKey += text[i];

    }
}else{

  for(let i = 0; i < text.length; i++){
    newKey += key[i];

  }

}

//console.log(newKey);

if (method === "Encode"){
    for (let i =0; i < text.length; i++){
      if(text[i] === " "){
        citext += " ";
        //i++;
      }

      else{
       citext += codeToAscii(((ascii(text[i]) - 64  + ascii(newKey[i])) % 26) + 97);
       //console.log(((ascii(text[i]) - 64  + ascii(newKey[i])) % 26) + 97);
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
       //console.log(codeToAscii((ascii(text[i]))));
     }
    }
   return citext;
  }

console.log(citext);
}
