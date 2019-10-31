var slider = document.querySelectorAll(".slide-item");
var slideIndex = 1;

function moverSlider(n){
    console.log(n);
    console.log(slider);
    showSlides(slideIndex += n); 1/-1
}

function showSlides(n) {
    var i;
    if (n > slider.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slider.length}
    for (i = 0; i < slider.length; i++) {
        // slider[i].style.display = "none";
        slider[i].classList.add("slide-inativo");  
    }
    // avaliacaoTd.classList.add
    slider[slideIndex-1].classList.remove("slide-inativo");  

    // slider[slideIndex-1].style.display = "block";  
}