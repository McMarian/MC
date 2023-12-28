var elements = document.querySelectorAll('.secondary-text');
var audio = new Audio('contents/hover-sound.mp3');
audio.volume = 0.7;
elements.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        audio.currentTime = 0; 
        audio.play();
    });

    element.addEventListener('mouseout', function() {
        audio.pause(); 
        audio.currentTime = 0; 
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            var href = this.getAttribute('href');
            document.body.classList.add('animate');    
            setTimeout(function() {
                window.location.href = href;
            }, 150); 
        });
    });
    document.body.addEventListener('animationend', function() {
        this.classList.remove('animate');
    });
});