$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: (100 + scroll / 50) + "%",
        top: -(scroll / 1000) + "%",
    });
});
