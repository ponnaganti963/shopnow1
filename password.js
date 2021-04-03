

function validating(){
  var text = document.getElementById('validationserver01').value;
  // localStorage.setItem('username',text);
return true;
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
