
var idArray = [];

var parameters = location.search.substring(1).split("&");
var te = parameters[1].split("=");
if(te[0] == "pass"){

}else{
  if(te[1] === ""){
    idArray = [];
    console.log(idArray);
    alert("it");
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

for(let i=0; i< stylecards.length ; i++){
  stylecards[i].addEventListener('mouseenter',function(){
    this.querySelector('.styling').style.opacity = '0.3';
    var ele = this.querySelector('.add');
    ele.style.display = "flex";
    ele.style.opacity ="1";
    ele.addEventListener('click',function(){
      var ad = document.getElementById('navname').innerHTML.slice(7);
      idArray = idArray.concat(+(i+1));

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

  });


}

function passing() {
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerHTML.slice(7);
   window.document.location = "one-plus.html" + "?username=" + ad+  " & "  +"id =" + unique;
}
function passing1() {
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerText.slice(7);
   window.document.location = "main.html" + "?username=" + ad +  " & "  +"id =" + unique;
}

function goTOCart(){
  let unique = [...new Set(idArray)];
  var ad = document.getElementById('navname').innerHTML.slice(7);
   window.document.location = "cart.html" + "?username=" + ad + " & "  +"id =" + unique;

}
