//your code here
const swapBtn = document.getElementById('swap');

function swapTheme() {
    swapBtn.addEventListener('click', function() {
        document.getElementById('swap').classList.toggle("button_night");
        document.getElementById('app').classList.toggle("night");
    })
}

swapTheme();
