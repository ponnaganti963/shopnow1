
var userdetails = [];
function passdetailsLogin(){
  window.document.location = "index1.html" + "?userdetails="  + userdetails;

}

function register() {
  var password = document.querySelector('.inputPassword6').value;
  var conformPassword = document.querySelector('.inputPassword7').value;
  var username = document.querySelector('.username').value;
  var phonenum = document.querySelector('.phoneno').value;
  var email = document.querySelector('.emailid').value;
  if (password === conformPassword) {
    userdetails.push(username);
    userdetails.push(phonenum);
    userdetails.push(email);
    userdetails.push(password);
    passdetailsMain();

  } else {
    document.querySelector('.form-text').innerText = "Password Should be same.";
    return false;
  }
}

function passdetailsMain(){
 alert('Successfully Registered');
  window.document.location = "index1.html" + "?userdetails="  + userdetails;

}

document.querySelector('.i1').addEventListener('click',function(){
  const passField1 = document.querySelector('.inputPassword6');
  const iTag1 = document.querySelector('.i1');
  if(passField1.type === "password"){
    passField1.type = "text";
    iTag1.classList.remove('bi-eye-fill');
    iTag1.classList.add('bi-eye-slash-fill');
  }else {
    passField1.type = "password" ;
    iTag1.classList.remove('bi-eye-slash-fill');
    iTag1.classList.add('bi-eye-fill');
  }
});

document.querySelector('.i2').addEventListener('click',function(){
  const passField2 = document.querySelector('.inputPassword7');
  const iTag2 = document.querySelector('.i2');
  if(passField2.type === "password"){
    passField2.type = "text";
    iTag2.classList.remove('bi-eye-fill');
    iTag2.classList.add('bi-eye-slash-fill');
  }else {
    passField2.type = "password" ;
    iTag2.classList.remove('bi-eye-slash-fill');
    iTag2.classList.add('bi-eye-fill');
  }
});
