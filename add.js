

var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.querySelector('#name1').value;
  var surname = document.querySelector('#email1').value;
  var telephone = document.querySelector('#tel1').value;
  var lostName = document.querySelector('#lname1').value;
  var lostId = document.querySelector('#lid').value;
  var photo = document.querySelector('#file1').value;
  var province = document.querySelector('#province1').value;
  var district = document.querySelector('#District1').value;
  var sector = document.querySelector('#sector1').value;
  var cell = document.querySelector('#cell1').value;
  var description = document.querySelector('#textb1').value;
  var data = {
    name: name,
    surname: surname,
    telephone: telephone,
    lostName: lostName,
    lostId: lostId,
    photo: photo,
    province: province,
    district: district,
    sector: sector,
    cell: cell,
    description: description
  };
  database.ref('lost-registrations').push(data);
  alert('Form submitted!');
  form.reset();
});
