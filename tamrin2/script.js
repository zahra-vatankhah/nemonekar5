const pasword=document.getElementById('password');
const toggle=document.querySelector('.toggle');
function changepasword(){
    if(pasword.type==='password'){
        pasword.setAttribute('type' , 'text');
        toggle.classList.add('hide');
    }
    else{
        pasword.setAttribute('type','password');
        toggle.classList.remove('hide')
    }
} 