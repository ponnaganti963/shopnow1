
var idArray = [];
const products = {
  1 : ["oneplus.jfif","One Plus Nord 5g","28,999"],
  2 : ["rolex.jfif","Rolex Watch","25,000"],
  3 : ["nikeshoes.JPG","Nike Shoes","2,570"],
  4 : ["iPad.jpg","iPad","48,470"],
  5 : ["iphonemobile.JPG","iPhone mobile","46,809"],
  6 : ["rolex.jfif" ,"Rolex Watch x","30,000"],
};

var parameters = location.search.substring(1).split("&");
var idpara = parameters[1].split("=");
if(idpara[1] === ""){
  idArray=[];
}
else{

  var i = idpara[1].split(",");
  for(let p=0; p<i.length ; p++){
      i[p] = parseInt(i[p]);
  }
  idArray = idArray.concat(i);
}
if(document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded',ready)
}else{
  ready();
}
function ready(){
  var parameters = location.search.substring(1).split("&");
  if(idArray.length <1 || idArray[0] == NaN){
    idArray =[];

    var emptyShow = document.querySelector('.emptyCart');
    emptyShow.style.display = "list-item";

    var hideCart = document.querySelector('.productCart');
    hideCart.style.display = "none";

    document.querySelector('.butSection').style.display = "none";
    // function goTOProduct(){
    //   var  ad = document.getElementById('navname').innerText.slice(7);
    //   window.document.location = "one-plus.html" + "?username=" + ad ;
    // }
  }
  else{



     // var parameters = location.search.substring(1).split("&");
     // var idParameter = unescape(parameters[1]);
     // console.log(idParameter);
     // var id = idParameter.split("=");


    // var imgscr = parameters[2].split("=");
    // var splitting = imgscr[1].split("/");
    // i = unescape(splitting.slice(-1));
    showCartProducts();
    function showCartProducts(){

      for(var i=0; i<idArray.length; i++){
        var newDiv = document.createElement('div');
        newDiv.style.display = "flex";
        var newDivs = newDiv.classList.add('productTitle');
        var myDiv = document.querySelector('.productCart');
        myDiv.appendChild(newDiv);
        var newDevPart1 = document.createElement('div');
        var newDevPart1Img = document.createElement('img');
        newDevPart1Img.setAttribute('src',products[idArray[i]][0]);
        newDevPart1Img.style.height = "100px";
        newDevPart1.appendChild(newDevPart1Img);
        var newDevPart1Title = document.createElement('h4');
        newDevPart1Title.innerHTML= products[idArray[i]][1];
        newDevPart1.appendChild(newDevPart1Title);
        newDiv.appendChild(newDevPart1);
        newDevPart1.classList.add('col-6');
        var newDevPart2 = document.createElement('div');
        var newDevPart2Qty = document.createElement('input');
        var newDevPart2Remove = document.createElement('button');
        newDevPart2Remove.classList.add("btn");
        newDevPart2Remove.classList.add("remove");
        newDevPart2Remove.innerHTML = "Remove";
        newDevPart2Remove.classList.add("btn-danger");
        newDevPart2Remove.style.margin= '20px';
        newDevPart2Qty.value = "1";
        newDevPart2Qty.id = "Qty";
        newDevPart2Qty.style.width = "50%";
        newDevPart2Qty.type = "number";
        newDevPart2.appendChild(newDevPart2Qty);
        newDevPart2.appendChild(newDevPart2Remove);
        newDiv.appendChild(newDevPart2);
        newDevPart2.classList.add('col-3');
        var newDevPart3 = document.createElement('div');
        newDevPart3.innerHTML="₹" + products[idArray[i]][2];
        newDiv.appendChild(newDevPart3);
        newDevPart3.classList.add('col-3');
        newDevPart3.classList.add('price');

      }
    }
   updateCartTotal();
    // document.querySelector('.imgsrc').src = products[id[1]][0];


    // var heading = parameters[1].split("=");
    // k = unescape(heading[1]);
    // document.querySelector('.heading').innerHTML= products[id[1]][1];

    // var price = parameters[3].split("=");
    // var p = unescape(price[1]);
    // document.querySelector('.price').innerHTML = "₹" + products[id[1]][2];

    // var qty = parameters[4].split("=");
    // var q = unescape(qty[1]);
    // document.querySelector('#Qty').value = 1 ;
    // updateCartTotal();

  }
  // function passIt() {
  //    var  ad = document.getElementById('navname').innerText.slice(7);
  //    window.document.location = "main.html" + "?username=" + ad + " & jahsd=asda";
  // }
  // function goTOProduct(){
  //   var  ad = document.getElementById('navname').innerText.slice(7);
  //   window.document.location = "one-plus.html" + "?username=" + ad ;
  // }


var changeQty = document.querySelectorAll('#Qty');
var titleOf = document.querySelectorAll('.col-6 h4')
var removebtn = document.querySelectorAll('.remove');
  for(let i=0; i<changeQty.length ; i++){
    removebtn[i].addEventListener('click',function(){
      removeFromCart(titleOf[i]);
    });
    changeQty[i].addEventListener('change',function(){
      if(isNaN(this.value) ){
        this.value = 1;
      }
      else if (this.value == 0) {
        removeFromCart(titleOf[i]);
      }
      updateCartTotal();
    });

  }

  function removeFromCart(i){
    alert("It will be removed from the cart");

    var titleis = i.innerText;

    var divRemove = document.querySelectorAll('.productTitle');

   for(let k=1; k<=6; k++){
     if(titleis === products[k][1]){
       var a = idArray.indexOf(k);
       idArray.splice(a,1);
       divRemove[a+1].remove();

     }
   }


   if(idArray.length === 0){
       ready();
   }
   updateCartTotal();
  }
  var buy = document.querySelector('#buy');
  buy.addEventListener('click',function(){

      idArray = [];
      ready();
     alert('Thanks for shopping!!!!');


  });


}
function passIt() {
  var parameters = location.search.substring(1).split("&");
  var userpart = parameters[0].split("=");
  var userparameter = unescape(userpart[1]);
   window.document.location = "main.html" + "?username=" + userparameter + "&" + "id=" + idArray;
}

function updateCartTotal(){
  var p = document.querySelectorAll('.price');
  var q = document.querySelectorAll('#Qty');
  var result = 0;
  for(let i=0;i<q.length ; i++){
    m = p[i].innerHTML.replace("₹"," ");
    s = m.replace(",","");
   a = parseInt(s);
   b = parseInt(q[i].value);

   result = result + (a * b);
  }
 document.querySelector('#subtotal').innerHTML = result;

}
