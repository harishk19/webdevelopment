

    var slideIndex=1;
    var myTimer;
    var slideshowContainer;
    
    
window.addEventListener("load",function() {
showSlides(slideIndex);
myTimer = setInterval(function(){plusSlides(1)}, 3000);
var slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

slideshowContainer.addEventListener('mouseenter', pause)
slideshowContainer.addEventListener('mouseleave', resume)
})
    
function plusSlides(n){
clearInterval(myTimer);
if (n < 0){
showSlides(slideIndex -= 1);
} else {
showSlides(slideIndex += 1); 
}
if (n === -1){
myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
} else {
myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
}
}
function currentSlide(n){
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
showSlides(slideIndex = n);
}

function showSlides(n){
var i;
var slides = document.getElementsByClassName("mySlidesfade");
var barl = document.getElementsByClassName("barl");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < barl.length; i++) {
  barl[i].className = barl[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
barl[slideIndex-1].className += " active";
}



pause = () => {
clearInterval(myTimer);
}
resume = () =>{
clearInterval(myTimer);
myTimer = setInterval(function(){plusSlides(slideIndex)}, 2000);
}


window.addEventListener("load",function() {
$(document).ready(function(){
  $("#menu").click(function(){
    $("#barl").slideToggle("slow");
  });
});
})



function openNav() {
  dip=document.getElementById("g1");
  pip=document.getElementById("g2");

  mySidebar=document.getElementById("mySidenav");
  if (mySidebar.style.width === '250px') {
    mySidebar.style.width = '0px';
    pip.style.display="none"
    dip.style.display="block"
  } else {
    mySidebar.style.width = '250px';
    pip.style.display="block"
    dip.style.display="none"
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
