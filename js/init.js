$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});

$(function() {
    $('.feedback').click(function() {
        $('.popup-window').show();
    });
 
    $('.close').click(function() {
        $('.popup-window').hide();
    });
});