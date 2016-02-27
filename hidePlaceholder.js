/*
hidePlaceholder is a simple function on Vanilla JS that hide placeholder when input has focus.
License: GPLv2
Source: https://github.com/EmgrtE/hidePlaceholder.git
Author: EmgrtE
*/

function hidePlaceholder(inputs){
    inputs=document.querySelectorAll(inputs);
    for(var i=0;i<inputs.length;i++){
        inputs[i].setAttribute('data-placeholder',inputs[i].getAttribute('placeholder'));
        inputs[i].onfocus=function(){
            this.setAttribute('placeholder','');
        };
        inputs[i].onblur=function(){
            this.setAttribute('placeholder',this.getAttribute('data-placeholder'));
        };
    }
}

/*
 ___________________________
 | q w e r t y u i o p [ ] |
 |  a s d f g h j k l ; '  |
 |   z x c v b n m , . /   |
 |=========================|
*/
