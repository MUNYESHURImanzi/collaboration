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
   