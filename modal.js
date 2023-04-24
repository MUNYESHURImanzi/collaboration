// var modal = document.querySelector("form1");

// // Get the button that opens the modal
// var btn = document.getElementById("submit");

// // Get the <span> element that closes the modal
// var span = document.getElementById("cross");

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event == modal) {
//     modal.style.display = "none";
//   }
// }


var moda = document.querySelector(".forms");

moda.style.display="none";


var allin= document.querySelector(".allin");
var btn = document.getElementById("submit2");
btn.addEventListener("click",()=>{
moda.style.display="block";



});

var span = document.getElementById("cross1");
 span.addEventListener("click",()=>{
   moda.style.display = "none";
 });

 var modal = document.querySelector(".form1");

modal.style.display="none";


var allin= document.querySelector(".allin");
var btn = document.getElementById("submit");
btn.addEventListener("click",()=>{
modal.style.display="block";



});
var span1 = document.getElementById("cross");
 span1.addEventListener("click",()=>{
   modal.style.display = "none";
 });