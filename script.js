//your code here
const swapBtn = document.getElementById('swap');

function swapTheme() {
    swapBtn.addEventListener('click', function() {
        document.getElementById('swap').className = "button_night";
        document.getElementById('app').className = "night";
    })
}

swapTheme();
