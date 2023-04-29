const sendMesage = (event) => {
  event.preventDefault()
  console.log("hhhhhh")
  let message = document.getElementById("name").value
  firebase.database().ref("messages").push().set({
      "sender": myName,
      "message": message
  });
  let message1 = document.getElementById("name")
  message1.value = "";
  return false;
}