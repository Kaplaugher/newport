





$(document).ready(function(){
   
    $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});

document.addEventListener('DOMContentLoaded', function(){
		Typed.new('#typed', {
			stringsElement: document.getElementById('typed-strings'),
            loop: false,
            typeSpeed: 20,
            startDelay: 1000,
            backSpeed: 10
		});
	});


$(".navbar ul li a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});


$(".home-page a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});

$(".footer .scroll-to-top-button a[href^='#']").on('click', function(e) {

   e.preventDefault();

   var hash = this.hash;

   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       window.location.hash = hash;
     });

});

















