$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom").css({
        backgroundSize: (100 + scroll / 50) + "%",
        top: -(scroll / 1000) + "%",
    });
});





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
    var slides2 = document.getElementsByClassName("slide-gallery");
    var dots = document.getElementsByClassName("dot");
    if (n > slides2.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides2[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




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
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}





var scrollTop = '';
var newHeight = '100';

$(window).bind('scroll', function () {
    scrollTop = $(window).scrollTop();
    newHeight = scrollTop + 100;
});

$('.popup-trigger').click(function (e) {
    e.stopPropagation();
    if (jQuery(window).width() < 767) {
        $(this).after($(this).nextAll('.popup:first'));
        $(this).nextAll('.popup:first').show().addClass('popup-mobile').css('top', 0);
        $('html, body').animate({
            scrollTop: $(this).nextAll('.popup:first').offset().top
        }, 500);
    } else {
        $('.popup').hide();
        $(this).nextAll('.popup:first').removeClass('popup-mobile').css('top', newHeight).toggle();
    };
});

$('html').click(function () {
    $('.popup').hide();
});

$('.popup-btn-close').click(function (e) {
    $(this).parent().hide();
});

$('.popup').click(function (e) {
    e.stopPropagation();
});




$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});




function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(function () {
    $("button").button();
});

$(function () {
    $("#accordion").accordion();
});

$(function () {
    $(".k-checkbox").checkboxradio({
        icon: false
    });
});

$(function () {
    $(document).tooltip();
});

$(function () {
    $("#tabs").tabs();
});

$("#date").datepicker();



//


$(".main-menu-small").click(function () {
    $(".nav-topnav-small").slideToggle();
});

function menuIconAnim(x) {
    x.classList.toggle("change");
}
