$(document).ready(function() {
    console.log("TEST")
    var navbarHeight = $('.navbar').outerHeight();
    $('body').css('margin-top', navbarHeight);
  });