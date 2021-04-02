




var stylecards = document.getElementsByClassName('stylecard');

for(let i=0; i< stylecards.length ; i++){
  stylecards[i].addEventListener('mouseenter',function(){
    this.classList.add('styleHover');
    var ele = this.querySelector('.add');
    ele.style.display = "flex";
    ele.style.opacity ="1";
    ele.addEventListener('click',function(){
      var ad = document.getElementById('navname').innerHTML.slice(7);
      var img = document.getElementsByClassName('card-img-top')[i].src;
      var heading = document.getElementsByClassName('title')[i].innerText;
      var p = document.getElementsByClassName('text-muted')[i].innerText;
      var price = p.replace("₹" ," ");
      var quantity = 1;
      window.document.location = 'cart.html' + "?username=" + ad + " & " + "heading=" + heading + " &" + "source=" + img +" & " + "price=" + price + " & " + "Quantity=" + quantity ;


    })
  });
  stylecards[i].addEventListener('mouseleave',function(){
    this.classList.remove('styleHover');
    var ele = this.querySelector('.add');
    ele.style.display = "none";

  })
}
