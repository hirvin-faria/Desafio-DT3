var sliderCat = document.querySelectorAll(".slide-item-cat");
var slideIndexCat = 1;

var sliderCad = document.querySelectorAll(".slide-item-cad");
var slideIndexCad = 1;

function moverSliderCategoria(n){
    console.log(n);
    console.log(slider);
    showSlidesCategoria(slideIndexCat += n); 1/-1
}

function showSlidesCategoria(n) {
    var i;
    if (n > sliderCat.length) {slideIndexCat = 1}    
    if (n < 1) {slideIndexCat = sliderCat.length}
    for (i = 0; i < sliderCat.length; i++) {
        sliderCat[i].classList.add("slide-inativo");  
    }
    sliderCat[slideIndexCat-1].classList.remove("slide-inativo");  
}

function moverSliderCadeiras(n){
    showSlidesCadeiras(slideIndexCad += n); 1/-1
}

function showSlidesCadeiras(n) {
    var i;
    if (n > sliderCad.length) {slideIndexCad = 1}    
    if (n < 1) {slideIndexCad = sliderCad.length}
    for (i = 0; i < sliderCad.length; i++) {
        sliderCad[i].classList.add("slide-inativo");  
    }
    sliderCad[slideIndexCad-1].classList.remove("slide-inativo");  
}
