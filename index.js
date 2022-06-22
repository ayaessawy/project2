var  closee = document.getElementById("close");
var closee3 =document.getElementById("close3");
var  closee2 = document.getElementById("close2");
var couponcodesection = document.getElementById("couponcodesection");
var aktevriacodesection  = document.getElementById("aktevriacode-section")
var aktevieriabutton   = document.getElementById("aktevieriabutton")
var buttoncategiore =document.getElementById("button-categiore");
var buttoncategiorenavbar=document.getElementById("button-categiore-navbar");
var dropdownbox= document.getElementById("drop-downbox");
var dropdown= document.getElementById("dropdown");
var  a = document.querySelectorAll("a");
var followusbutton =document.getElementById("followus");
var followussection =document.getElementById("followus-section");
var signbutton =document.getElementById("signbutton");
var loginsection =document.getElementById("login-section");
var login =document.getElementById("login");
var discountbutton=document.getElementById("discount-button");
var discountnavbarlist =document.getElementById("discountnavbar-list");
/****************************************************************************** */
discountbutton.onclick =function(){
       discountnavbarlist.classList.toggle("block");
      }
/****************************************cupon code when click on button  Discount code in homepage********************************************/ 
var btn =document.querySelectorAll(".btn");

for (var l=0;l<btn.length;l++){
btn[l].addEventListener("click",function(){
        couponcodesection.style.display="block";
})
}
/**************************************folllow us selection************************* */

followusbutton.addEventListener("click",function(){
              followussection.classList.toggle("none");
           

          



});


/**************************************active code selection  $$ sign up************************* /
signbutton.addEventListener("click",function(){
        aktevriacodesection.style.display="block";


          



});
aktevieriabutton.addEventListener("click",function(){
        aktevriacodesection.style.display="block";


          



});
/******************************************log in section************************************************** */
login.addEventListener("click",function(){
        loginsection.style.display="block";


          



});
/**************************************close icon************************* */
closee2.addEventListener("click",function(){
        loginsection.style.display="none";

})
closee.addEventListener("click",function(){
        aktevriacodesection.style.display="none";

})
closee3.addEventListener("click",function(){
        couponcodesection.style.display="none";

})


/*************************************categorie selection************************* */

var links = document.querySelectorAll("#dropdown li");
for (var i = 0; i < links.length; i++) {


    links[i].addEventListener("click", function(event) {
        dropdownbox.classList.remove("drobox-categiore-navbar");

      console.log( event.target.innerHTML )
      document.getElementById("button-categiore1").innerText =event.target.innerHTML;

      dropdownbox.classList.toggle("none");


})
}


buttoncategiorenavbar.addEventListener("click",function(){

        dropdownbox.classList.toggle("none");
        dropdownbox.classList.toggle("drobox-categiore-navbar");
        
         })
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
