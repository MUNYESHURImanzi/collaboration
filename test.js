var firebaseConfig = {

    apiKey: "AIzaSyDc0rKprOAp8sNlruRQZqgzUDlARPETN-c",
    authDomain: "lostandfound-b8220.firebaseapp.com",
    projectId: "lostandfound-b8220",
    storageBucket: "lostandfound-b8220.appspot.com",
    messagingSenderId: "449679138570",
    appId: "1:449679138570:web:6f07aa9a8e56fd190b24f3",
    measurementId: "G-6MMV06JCFB"

    // Your Firebase project's configuration object
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Create a reference to the Firebase database
  var database = firebase.database();

  // Add an event listener to the form's submit button
document.querySelector('.lbuto').addEventListener('click', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the values from the form inputs
    var name = document.querySelector('#name1').value;
    var email = document.querySelector('#email1').value;
    var tel = document.querySelector('#tel1').value;
    var lostName = document.querySelector('#lname1').value;
    var lostId = document.querySelector('#lid').value;
    var photo = document.querySelector('#file1').value;
    var province = document.querySelector('#province1').value;
    var district = document.querySelector('#District1').value;
    var sector = document.querySelector('#sector1').value;
    var cell = document.querySelector('#cell1').value;
    var message = document.querySelector('#textb1').value;
  
    // Create a new object with the form data
    var newData = {
      name: name,
      email: email,
      tel: tel,
      lostName: lostName,
      lostId: lostId,
      photo: photo,
      province: province,
      district: district,
      sector: sector,
      cell: cell,
      message: message
    };
  
    // Store the new data in Firebase
    database.ref('lostRegistrations').push(newData);
  
    // Clear the form inputs
    document.querySelector('#name1').value = '';
    document.querySelector('#email1').value = '';
    document.querySelector('#tel1').value = '';
    document.querySelector('#lname1').value = '';
    document.querySelector('#lid').value = '';
    document.querySelector('#file1').value = '';
    document.querySelector('#province1').value = '';
    document.querySelector('#District1').value = '';
    document.querySelector('#sector1').value = '';
    document.querySelector('#cell1').value = '';
    document.querySelector('#textb1').value = '';
  });
  

  // Create a reference to the "lostRegistrations" collection in Firebase
var lostRegistrationsRef = database.ref('lostRegistrations');

// Retrieve the data from Firebase
lostRegistrationsRef.on('value', function(snapshot) {
  // Loop through the snapshot of the data
  snapshot.forEach(function(childSnapshot) {
    // Get the data from the child snapshot
    var data = childSnapshot.val();

    // Use the data in your JavaScript code
    console.log();

  