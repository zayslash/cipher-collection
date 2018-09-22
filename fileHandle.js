//NAME: ZANIF SANDY (ZAYSLASH)

var FileName  = "";
var input = document.getElementById("myFile");
var output = document.getElementById("text-box");

input.addEventListener("change", function () {
 if (this.files && this.files[0]) {
   var myFile = this.files[0];
   var reader = new FileReader();

   reader.addEventListener('load', function (e) {
     output.textContent = e.target.result;
     FileName = myFile.name;
     console.log(myFile.name);
   });

   reader.readAsBinaryString(myFile);
 }
});


function download_file(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}
