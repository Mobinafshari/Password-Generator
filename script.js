const btnEl=document.getElementById("btn");
const inputEl=document.getElementById('input');
const iconEl=document.querySelector('.fa-copy');
const alertEl= document.querySelector('.alert-container');

btnEl.addEventListener('click',()=>{
    createPassword();
})

iconEl.addEventListener('click',()=>{
    copyPassword();
    alertEl.classList.remove('active')
    setTimeout(()=>{
        alertEl.classList.add('active');
    },2000)
})
function createPassword(){
    const chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordLength=14;
    let password= '';
    for (let index = 0; index < passwordLength; index++) {
        
        const random=Math.floor(Math.random()*chars.length)
        password += chars.substring(random, random+1);
        
    }
    inputEl.value=password;
    alertEl.innerText= password + "  copied!"
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
    
}