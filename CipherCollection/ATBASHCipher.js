//NAME: ZANIF SANDY (ZAYSLASH)

var AtbashCipher = function(text,method){

  var alpha =         "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var reverse_alpha = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
  var index = 0 ;
  var citext = "";

  if (method === "Encode"){
      for (let i = 0; i < text.length; i++){
         for (let u = 0; u < alpha.length; u++){

            if (text[i] === alpha[u] ){
              index = u;
              citext += reverse_alpha[index];
            }else if (text[i] === alpha[u].toLowerCase()){
              index = u;
              citext += reverse_alpha[index].toLowerCase();

            }else if (text[i] === " ") {
              citext += " ";

            }
         }
      }
      return citext;
    }
    else{

      for (let i = 0; i < text.length; i++){
         for (let u = 0; u < alpha.length; u++){
            if (text[i] === reverse_alpha[u] ){
              index = u;
              citext += alpha[index];
            }else if (text[i] === reverse_alpha[u].toLowerCase()){
              index = u;
              citext += alpha[index].toLowerCase();

            }else if (text[i] === " ") {
              citext += " ";

            }
         }
      }
      return citext;


    }
}
