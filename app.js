const form = document.querySelector(".contact-form");
const new_form = document.querySelector(".form")
form.addEventListener('click', opening_form);
function opening_form(){
    console.log("je suis ici")
    const div = document.createElement('div');
    div.classList.add('form-box')
    new_form.appendChild(div);
}

const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.nextBtn');
setInterval(onGoing,3000)
function onGoing(){
    slider.append(slider.querySelector('div:first-child'))
}
