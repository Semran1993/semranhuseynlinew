window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
var affix = sticky;
var text = sticky;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("affix")
    navbar.classList.remove("text")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("affix")
    navbar.classList.add("text")
  }
}


$('#Projects .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:3,
          nav:true,
          loop:false
      }
  }
})