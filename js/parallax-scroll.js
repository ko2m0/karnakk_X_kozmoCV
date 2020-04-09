$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolledY = $(window).scrollTop();
        $('#vvc-cover-title').css('bottom', '-' + ((scrolledY * 0.7)) + 'px');
        $('#wrapper').css('top', '-' + ((scrolledY * 0.50)) + 'px');

    }

});
