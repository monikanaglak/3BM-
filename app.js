
const slider = document.querySelector('.slider');
setInterval(onGoing,3000)
function onGoing(){
    slider.append(slider.querySelector('div:first-child'))
    
}
