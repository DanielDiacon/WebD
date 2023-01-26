// menu burger <-------------------------->

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

// music <-------------------------->

// dark mode <-------------------------->
var darkMode = document.getElementById('dark-change');
darkMode.onclick = function(){
   document.body.classList.toggle("night");
}
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    
});


import('./music.js')