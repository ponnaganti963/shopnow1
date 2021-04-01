var parameters = location.search.substring(1).split("&");

if(parameters.length <3){
  document.getElementById('cartId').innerHTML = "Your Cart Is empty"
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
  document.querySelector('#Qty').innerHTML = q ;

  var s = p.split(",");
  var z = "";
  for(let i=0; i<s.length ; i++){
    z += s[i];
  }
  a = parseInt(z);
  b = parseInt(q);
 document.querySelector('#subtotal').innerHTML = a * b;

}
