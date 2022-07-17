const email=document.getElementById('email');
const password=document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener("submit",(e)=>{
    var messages=[]
    if(email.value=='' || email.value==null){
        messages.push("email is req")
    }
    if(password.value.length<=6 ){
        messages.push("length of password is less than 6");
    }
    if(password.value=='password'){
        messages.push("password cant be password")
    }
    if(messages.length>0){
        e.preventDefault();
        // errorElement.innerText = messages.join(', ')
        alert(messages.join(', '));
    }
})
