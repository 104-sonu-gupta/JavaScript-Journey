'use strict'

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');

function addClass()
{
    modal.classList.add('hidden');           
    overlay.classList.add('hidden');
}

const closeClass = function(){
    
    // to remove one or more classes seperated by comma (don't use dot(.) here)

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

btnOpen.forEach(element => {

    element.addEventListener('click', closeClass);
    
});

/**
 * if we use addClass() then it wont work beacuse we want to trigger function only after Click
  
 * The compiler will call the function automatically for us, so no need to call by ourselves

 */ 

btnClose.addEventListener('click', addClass);   
overlay.addEventListener('click', addClass);



/**
 * Keydown  :   When we press down the key

 * Keyup    :   When we lift our finger off the keyboard / key

 * Keypress :   Fired continuosly while a certain key is pressed
 
 */

document.addEventListener('keydown', function(event){

    // To check whether the a element have a particular class or not we use : element.classList.contains('className')

    if(event.code==='Escape' && !modal.classList.contains('hidden'))
    {
        addClass();
    }

}); 