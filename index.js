var  closee = document.getElementById("close");
var aktevriacodesection  = document.getElementById("aktevriacode-section")
var aktevieriabutton   = document.getElementById("aktevieriabutton")
var buttoncategiore =document.getElementById("button-categiore");
var dropdownbox= document.getElementById("drop-downbox");
var dropdown= document.getElementById("dropdown");
var  a = document.querySelectorAll("a");
var followusbutton =document.getElementById("followus");
var followussection =document.getElementById("followus-section");

/**************************************folllow us selection************************* */

followusbutton.addEventListener("click",function(){
              followussection.classList.toggle("none");
           

          



});


/**************************************active code selection************************* */

aktevieriabutton.addEventListener("click",function(){
        aktevriacodesection.style.display="block";


          



});

/**************************************close icon************************* */

closee.addEventListener("click",function(){
        aktevriacodesection.style.display="none";

})



/**************************************categorie selection************************* */

var links = document.querySelectorAll("#dropdown li");
for (var i = 0; i < links.length; i++) {


    links[i].addEventListener("click", function(event) {
      console.log( event.target.innerHTML )
      document.getElementById("button-categiore1").innerText =event.target.innerHTML;

      dropdownbox.classList.toggle("none");


})


}
/**************************************categorie show $hiden************************* */

buttoncategiore.onclick =function(){

  dropdownbox.classList.toggle("none");
}
aktevieriabutton.addEventListener("click",function(){
        aktevriacodesection.style.display="block";


          



});
/**************************************close icon************************* */

closee.addEventListener("click",function(){
        aktevriacodesection.style.display="none";

})
