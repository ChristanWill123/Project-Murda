

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
 
}


//Function to scroll from header to video section
function scrolltovideos(){
  document.querySelector('.videos').scrollIntoView({
     behavior: 'smooth'
  });

}

//Function for validating form completion

function validator(){
  const mail = document.forms["subscriberForm"]['email'].value;
  const country = document.getElementById("country").value;

  if((mail == '' || mail == 'EMAIL ADDRESS')) {
    alert("Email address must be filled out");
    return false;
  } else if (country == 'COUNTRY'){
    alert("Please enter in country to continue");
    return false;
  } else{
    alert("Thank You for submitting!");
    return true;
  }

}

//Function for sticky navbar 

window.onscroll = function(){
  myFunction()
};

var navbar = document.getElementById("true_header");

var sticky = navbar.offsetTop;

function myFunction(){
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

}
