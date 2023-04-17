const hideFormBtn = document.getElementById('cross');
const myForm = document.querySelector('.forms')
const cards=document.querySelector('.card')
myForm.style.display = 'none';
cross.addEventListener('click', function(event) {
  myForm.style.display = 'none';
  
  document.body.style.backgroundColor = "";
  event.preventDefault();
});

const show = document.getElementById('submit2');
const Form = document.querySelector('.forms')

submit2.addEventListener('click', function(event) {
  Form.style.display = '';

  document.body.style.backgroundColor = "blue";
  document.body.style.backgroundColor = "rgba(25, 20, 58, 0.5)";

  if (event.target == mForm) {
    modal.style.display = "none";

  }
  event.preventDefault();
    

  }
);

 

const hide = document.getElementById('cross1');
const mForm = document.querySelector('.form')
mForm.style.display = 'none';
cross1.addEventListener('click', function(click) {
  mForm.style.display = 'none';
  document.body.style.backgroundColor = "";
  
  click.preventDefault();

});



const show1 = document.getElementById('submit');
const Form1 = document.querySelector('.form')
const card1=document.querySelector('card1')
submit.addEventListener('click', function(click) {
  Form1.style.display = '';

  document.body.style.backgroundColor = "blue";
  document.body.style.backgroundColor = "rgba(25, 20, 58, 0.5)";
  card1.style.display='none';
  cards.style.display='none';
  click.preventDefault();
    

  }
 
  
);
window.onclick = function(event) {
  if (event.target == Form1) {
    modal.style.display = "none";
  }}





let suggestions = [
  "passport",
  "money",
  "id-codes",
  "driving permit",
  "Land document",
  "school cards",
  "computers",
  "telephone",
  "vehicles",
  "keys",
  "dogs",
  "person/chlid",
  "images ",
  "bank cards",
  "station cards",
  "work cards",
  "watches",
  "wallets",
  "",
//   "How to learn JavaScript",
//   "How to became Freelancer",
//   "How to became Web Designer",
//   "How to start Gaming Channel",
//   "How to start YouTube Channel",
//   "What does HTML stands for?",
//   "What does CSS stands for?",
];

// getting all required elements in html field
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}







//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyDXXPHYnVmjivaLY8jx7zXazN4uzRwNKI4",
//     authDomain: "lostandfind-274ff.firebaseapp.com",
//     databaseURL: "https://lostandfind-274ff-default-rtdb.firebaseio.com",
//     projectId: "lostandfind-274ff",
//     storageBucket: "lostandfind-274ff.appspot.com",
//     messagingSenderId: "14626368265",
//     appId: "1:14626368265:web:32175b2af4e7b6018841d8",
//     measurementId: "G-L0DC0TZDBT"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// import{getdatabase,set,get,update,remove,ref,child}
// from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// const db = getDatabase()
// //data base area

// var name1=document.querySelector("#name1")
// var email1=document.querySelector("#email1")
// var tel1=document.querySelector("#tel1")
// var lname1=document.querySelector("#lname1")
// var lid1=document.querySelector("#lid")
// var file1=document.querySelector("#file1")
// var provice1=document.querySelector("#province1")
// var District1=document.querySelector("#District1")
// var sector1=document.querySelector("#sector1")
// var cell1=document.querySelector("#cell1")
// var textb1=document.querySelector("#textb1")
   

// var lbutton=document.quertSelector("#lbuto")

// function insertdata() {
//   set(ref(db, "lost details/" + name1.value),{
//     names:name1.value,
//     Email:email1.value,
//     telephone:tel11.value,
//     lostname:lname1.value,
//     lostid:lid1.value,
//     photo:file1.value,
//     province:province1.value,
//     District:District1.value,
//     sector:sector1.value,
//     cell:cell1.value,
//     message:textb1.value

//   })
// .then(()=>{
//   alert("you have succefull submited your requist")
// })
// .catch((error)=>{
//   alert(error)

// });
// }

// //foun part

// var name=document.querySelector("#name")
// var email=document.querySelector("#email")
// var tel=document.querySelector("#tel")
// var lname1=document.querySelector("#fname")
// var fid=document.querySelector("#fid")
// var file1=document.querySelector("#file1")
// var provice=document.querySelector("#province")
// var District=document.querySelector("#District")
// var sector1=document.querySelector("#sector")
// var cell=document.querySelector("#cell")

   

// var lbutton=document.quertSelector(".lostb")

// function insertdata() {
//   set(ref(db, "lost details/" + name1.value),{
//     names:name1.value,
//     Email:email1.value,
//     telephone:tel11.value,
//     lostname:lname1.value,
//     lostid:lid1.value,
//     photo:file1.value,
//     province:province1.value,
//     District:District1.value,
//     sector:sector1.value,
//     cell:cell1.value,
//     message:textb1.value

//   })
// .then(()=>{
//   alert("you have succefull submited your requist")
// })
// .catch((error)=>{
//   alert(error)

// });
// }


