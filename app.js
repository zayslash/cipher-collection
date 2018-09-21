//NAME: ZANIF SANDY (ZAYSLASH)

/*
 ToDo -----------------------------------------

 Simple Substitution Cipher
 Atbash Cipher
 Baconian Cipher
 Hill Cipher
 Running Key Cipher
----------------------------------------------- */

function Cipher_loaders(){       //COLLECTION OF CIPHERS
document.write('<script src="CipherCollection/caesarCipher.js"></script>');
document.write('<script src="CipherCollection/ROT13Cipher.js"></script>');
document.write('<script src="CipherCollection/vigenereCipher.js"></script>');
document.write('<script src="CipherCollection/ATBASHCipher.js"></script>');
}

function UI(){
  document.write('<script src="UIdependencies.js"></script>'); //MENU USER INTTERFACE
}

function dataSrtuctures(){
document.write('<script src="stacks.js"></script>'); // STACKS

}

var Mainloaders = function(){
Cipher_loaders();
dataSrtuctures();
UI();

}

Mainloaders();
