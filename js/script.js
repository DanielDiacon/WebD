// menu burger <===============================>

let body = document.querySelector('body');
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = function(){
   burger.classList.toggle('active')
   menu.classList.toggle('active')
   body.classList.toggle('lock')
   };

document.onclick = function(e){
   if(e.target.id !== 'burger' && e.target.classList !== 'menu')
   {
      burger.classList.remove('active')
      menu.classList.remove('active')
      body.classList.remove('lock')
   }
}
// <=>


// dark mode <==============================>
var darkMode = document.getElementById('dark-change');
darkMode.onclick = function(){
   document.body.classList.toggle("night");
}
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    
});
// <=>


// slider <==================================>
$(document).ready(function(){
   $('.projects__slider').slick({
      arrows:true,
      dots:true,
      speed:450,
      easing:'ease',
      infinity:true,
      autoplay:true,
      autoplaySpeed:1800,
      draggable:false,
      touchThreshold:10,
      touchMove:true,
      adaptedHeight:true,
      slidesToShow:3,
      responsive:[
         {
            breakpoint:767,
            settings: {
               autoplay:false,
               slidesToShow:1,
               draggable:false,
               touchThreshold:20,
               waitForAnimate:false,
            }
         },
         {
            breakpoint:1200,
            settings: {
               slidesToShow:2,
            }
         }
      ]
   })
});
// <=>

// header show <==================================>
var lastScrollTop = 0;
   navbar = document.getElementById('navbar');
window.addEventListener("scroll" , function(){
   var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   if (scrollTop > lastScrollTop){
      navbar.style.top='-50px'
   } else {
      navbar.style.top='0'
   }
   lastScrollTop = scrollTop;
})