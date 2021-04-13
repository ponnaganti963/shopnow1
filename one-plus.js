
var idArray = [];
var parameters = location.search.substring(1).split("&");
var userpart = parameters[1].split("=");
var id = unescape(userpart[1]);
if(id === ""){
  idArray =[];
}
else{
  var i = id.split(",");
  for(let p=0; p<i.length ; p++){
      i[p] = parseInt(i[p]);
  }
  idArray = idArray.concat(i);
}

   function passing() {
     // var  ad = document.getElementById('navname').innerText.slice(7);
     var parameters = location.search.substring(1).split("&");
     var userpart = parameters[0].split("=");
     var ad = unescape(userpart[1]);
      window.document.location = "main.html" + "?username=" + ad + "& id=" + idArray ;
   }
   function cartpass() {

    var  k=0;
    for(let i=0;i<idArray.length ; i++){
      if(idArray[i] === 1){
        k = 1;
      }
    }
    if(k==1){
      alert("akready added to cart");

    }
    else{
        idArray = idArray.concat(+(1));
    }
   }

   function myFunction() {
     var myText = document.querySelectorAll('.show');
     var  btn = document.querySelector('#mybtn');

     if(myText[0].style.display == "none"){
       for(let i=0; i< myText.length; i++){myText[i].style.display = "list-item"; };
       btn.innerHTML = "Show less";
     }
     else{
       for(let i=0; i< myText.length; i++){myText[i].style.display = "none"; };
       btn.innerHTML = "Show more";
     }
   }
