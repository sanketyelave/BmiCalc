'use strict';

let show= document.querySelector('.check');
let overlay= document.querySelector('.overlay');
let hidden= document.querySelector('.hidden');
let modal = document.querySelector('.modal');
let close = document.querySelector('.close');
let height=parseFloat(document.querySelector('.height').value);
let weight=parseFloat(document.querySelector('.weight').value);
let sanket=parseFloat(weight/height**2);


let ram=function(){ 

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
let sita=function(){
    
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}
let esc=function(e){
    if(e.key==='Escape'){
        again();
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
}

let enter=function(e){
   if(e.key==='Enter'){
       modal.classList.remove('hidden');
       overlay.classList.remove('hidden');
   
let height=parseFloat(document.querySelector('.height').value);
let weight=parseFloat(document.querySelector('.weight').value);
let sanket=parseFloat(weight/height**2);
   if(height!=height && weight!=weight ){
    document.querySelector('.value').textContent = 'Enter a valid input☠️';
}else{
    document.querySelector('.value').textContent = `${sanket}✨`;
}
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
}}

let jay=function(){
    let height=parseFloat(document.querySelector('.height').value);
let weight=parseFloat(document.querySelector('.weight').value);
let sanket=parseFloat(weight/height**2);
    if(!height && !weight && height===0){
        document.querySelector('.value').textContent = 'Enter a valid input☠️';
    }else{
        document.querySelector('.value').textContent = `${sanket}✨`;
    }
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
   ram();
}
let again=function(){
    modal.classList.add('hidden');
   overlay.classList.add('hidden');
    let height=parseFloat(document.querySelector('.height').value=0.0);
    let weight=parseFloat(document.querySelector('.weight').value=0.0);
    let sanket=parseFloat(weight/height**2);
    document.querySelector('.weight').textContent = ' ';
    document.querySelector('.height').textContent = ' ';
    document.querySelector('.value').textContent = 'Enter a valid input☠️';
    
}

  show.addEventListener('click',jay);
   close.addEventListener('click',again);
    overlay.addEventListener('click',again);
    document.addEventListener('keydown',esc);
    document.addEventListener('keydown',enter);



