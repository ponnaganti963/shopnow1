if(document.readyState == 'loading'){
   document.addEventListener('DOMContentLoaded',ready)
}else{
  ready();
}

function ready(){
  var parameters = location.search.substring(1).split("&");

  if(parameters.length <3){
    var text = document.getElementById('cartId') ;
    text.innerHTML = "Your Cart Is empty";
  }
  else{
    var parameters = location.search.substring(1).split("&");
    var imgscr = parameters[2].split("=");
    var splitting = imgscr[1].split("/");
    i = unescape(splitting.slice(-1));
    document.querySelector('.imgsrc').src = i;


    var heading = parameters[1].split("=");
    k = unescape(heading[1]);
    document.querySelector('.heading').innerHTML= k;

    var price = parameters[3].split("=");
    var p = unescape(price[1]);
    document.querySelector('.price').innerHTML = "₹" + p;

    var qty = parameters[4].split("=");
    var q = unescape(qty[1]);
    document.querySelector('#Qty').value = q ;
    updateCartTotal();

  }


  document.querySelector('#Qty').addEventListener('change',function(){
    if(isNaN(this.value) || this.value<1){
      this.value = 1;
    }
    updateCartTotal();
  });

  var buy = document.querySelector('#buy');
  buy.addEventListener('click',function(){

      document.getElementById('cartId').innerHTML = "Your Cart Is empty"
      document.querySelector('#Qty').value = 0;
      document.querySelector('#subtotal').innerHTML = 0;
     alert('Thanks for shopping!!!!');
    

  });


}

function updateCartTotal(){
  var p = document.querySelector('.price').innerHTML;
  var q = document.querySelector('#Qty').value;
   m = p.replace("₹"," ");
   s = m.replace(",","");
  a = parseInt(s);
  b = parseInt(q);
 document.querySelector('#subtotal').innerHTML = a * b;

}
