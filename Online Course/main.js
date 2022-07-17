 const questions = document.querySelectorAll('.question-answer');

 questions.forEach(function(question) {
     const btn = question.querySelector('.question-btn');
     btn.addEventListener("click", function() {
         questions.forEach(function(item) {
             if (item !== question) {
                 item.classList.remove("show-text");
             }
         })
         question.classList.toggle("show-text");
     })
 })

const email=document.getElementById('email');
const name=document.getElementById('name');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener("submit",(e)=>{
    var messages=[]
    if(name.value=='' || name.value==null){
        messages.push("Name is req")
    }
    if(email.value=='' || email.value==null){
        messages.push("email is req")
    }
    if(password.value.length<=6 ){
        messages.push("length of password is less than 6");
    }
    if(password.value=='password'){
        messages.push("password cant be password")
    }
    if(password.value!=cpassword.value){
        messages.push("passwords do not match")
    }
    if(messages.length>0){
        e.preventDefault();
        alert(messages.join(', '));
    }
})
