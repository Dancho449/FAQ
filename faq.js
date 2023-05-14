//const reveal = document.getElementsByClassName('holder');
const reveal = document.querySelectorAll('.holder')

for(i = 0; i < reveal.length; i++) {
    // class list
    reveal[i].addEventListener('click', function(){
        this.classList.toggle('active');

    });
}
