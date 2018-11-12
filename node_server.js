
var method = "";
const http =require('http');
const url = require('url');

var server = http.createServer(function(request, response){

var paresedUrl = url.parse(request.url,true);
var path = paresedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\?+$/g,'');

});

// const { CeasarCipher } = require("./tools.js");
// const { Vigenere } = require("./tools.js");
//
// const flag= process.argv[2];
//
//     if (flag == "-e"){
//       method = "Encode";
//     }else if (flag == "-d") {
//       method = "Decode";
//     }else{
//       console.log("WRONG FLAG COMMAND")
//     }
//
// const wordinput = process.argv[3];
// const shift= process.argv[4];
//
// console.log(CeasarCipher(wordinput,parseInt(shift),method));
// console.log(method);


server.listen(8080, function(){

console.log(`Server running on port 8080`);

});
