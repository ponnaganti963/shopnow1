
var idArray = [];

var parameters = location.search.substring(1).split("&");
var te = parameters[1].split("=");
var userdetails = parameters[2].split("=");
if(te[0] == "pass"){

}else{
  if(te[1] === ""){
    idArray = [];
  }
  else{
    var i = te[1].split(",");
    for(let p=0; p<i.length ; p++){
        i[p] = parseInt(i[p]);
    }
    idArray = idArray.concat(i);
  }
}

var stylecards = document.getElementsByClassName('col-auto');
var spanbadge = document.querySelector('.nav-item span');
var alertbox = document.querySelectorAll('.alert');
for(let i=0; i< stylecards.length ; i++){
  stylecards[i].addEventListener('mouseenter',function(){
    this.querySelector('.styling').style.opacity = '0.3';
    var ele = this.querySelector('.add');
    ele.style.display = "flex";
    ele.style.opacity ="1";
    ele.addEventListener('click',function(){
        // var newDiv = document.createElement('div');
        // newDiv.innerHTML = '<span > </span>'
        idArray = idArray.concat(+(i+1));
        alertbox[i].style.display = "flex";

          let unique = [...new Set(idArray)];
          spanbadge.innerText = unique.length;

       // window.document.location = "cart.html" + "?username=" + ad + " & "  +"id =" + unique;
      // var img = document .getElementsByClassName('card-img-top')[i].src;
      // var heading = document.getElementsByClassName('title')[i].innerText;
      // var p = document.getElementsByClassName('text-muted')[i].innerText;
      // var price = p.replace("₹" ," ");
      // var quantity = 1;
      // goTOCarting(i+1);

    });


  });

  stylecards[i].addEventListener('mouseleave',function(){
    this.querySelector('.styling').style.opacity = '1';
    var ele = this.querySelector('.add');
    ele.style.display = "none";
    alertbox[i].style.display = "none";

  });

}

function passing() {
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerHTML.slice(7);

   window.document.location = "one-plus.html" + "?username=" + ad+  "&"  +"id=" + unique + "&userdetails=" + userdetails[1];
}
function passing1() {
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerText.slice(7);
   window.document.location = "main.html" + "?username=" + ad +  "&"  +"id=" + unique + "&userdetails=" + userdetails[1];
}

function goTOCart(){
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerHTML.slice(7);
   window.document.location = "cart.html" + "?username=" + ad + "&"  +"id=" + unique + "&userdetails=" + userdetails[1];

}

function goToAccount(){
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerHTML.slice(7);
   window.document.location = "my-account.html" + "?username=" + ad + "&"  +"id=" + unique + "&userdetails=" + userdetails[1];
}
