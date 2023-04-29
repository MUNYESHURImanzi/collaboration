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
document.body.style.position="fixed";



});

var span = document.getElementById("cross1");
 span.addEventListener("click",()=>{
   moda.style.display = "none";
   window.location.reload();
 });

 var modal = document.querySelector(".form1");

modal.style.display="none";


var allin= document.querySelector(".allin");
var btn = document.getElementById("submit");
btn.addEventListener("click",()=>{
modal.style.display="block";
document.body.style.position="fixed";



});
var span1 = document.getElementById("cross");
 span1.addEventListener("click",()=>{
   modal.style.display = "none";
   window.location.reload();
 });

 var fbtn=document.querySelector(".fbuto")
fbtn.addEventListener("click",()=>{
window.location.href="lost.html"
  window.alert("you have successfull submited")
})

var lbtn=document.querySelector(".lbuto")
lbtn.addEventListener("click",(event)=>{
window.location.href="found.html"
if (event){
  window.alert("you have successfull submited")
}
  
})