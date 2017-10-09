// JavaScript Document
$(function(){
	var myVal= $('#current').offset().top-240;
    $('html, body').animate({
        scrollTop:myVal
    }, 1000);
    return false;
});