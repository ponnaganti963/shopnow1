

function validating(){
  var username = document.getElementById('validationserver01').value;
  var password = document.getElementById('pass').value;
  var ad = location.search.substring(1).split("=");
  var details = ad[1].split(',');
  if(username === details[0] & password === details[3]){
      passTomain();
  }
  else{
    alert("Username or password Doesn't match.");
    return false;
  }
  }

const passField = document.querySelector('#pass');
const showBtn = document.querySelector('span .i0');
const iTag = document.querySelector('.i0');
showBtn.onclick = (() =>{
  if(passField.type === "password"){
    passField.type = "text";
    iTag.classList.remove('bi-eye-fill');
    iTag.classList.add('bi-eye-slash-fill');
  }
  else{
    passField.type = "password";
    iTag.classList.remove('bi-eye-slash-fill');
    iTag.classList.add('bi-eye-fill');
  }
});

function passTomain(){
  var username = document.getElementById('validationserver01').value;
  var password = document.getElementById('pass').value;
  var ad = location.search.substring(1).split("=");
  window.document.location = "main.html" + "?username=" + username + "&pass=" + password   +"&userdetails=" + ad[1];
}

function passit(){
  var ad = location.search.substring(1).split('=');
  window.document.location = "index1.html" + "?userdetails=" + ad[1];
}
