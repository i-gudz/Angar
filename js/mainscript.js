var elem = document.getElementById("scroll_portfolio_page3");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#scroll_portfolio_page3').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("scroll_portfolio_page2");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#scroll_portfolio_page2').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("elem");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#elem').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("element");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#element').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("eleme");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#eleme').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("elements");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#elements').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("elemen");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#elemen').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

var elem = document.getElementById("scroll_portfolio");

var style = getComputedStyle(elem);

elem.style.width = 100 + "%";

(function($) {
    $(window).load(function() {
        $('#scroll_portfolio').mCustomScrollbar({
            theme: "inset-dark"
        });
    });
})(jQuery);

$(document).ready(function() {
    $('.pages').on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

$(document).ready(function() {
    $('.btn_control').on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1000);
    });
});

var slideIndex = 1;
showSlides(slideIndex);


/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentxSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

}

$(document).ready(function() {
    $("#but1").click(function() {
        $('.map').show();
        $('.form').hide();
    });

    $("#but2").click(function() {
        $('.form').show();
        $('.map').hide();
    });
});

$(document).ready(function() {
    $("#show_email").click(function() {
        $('.email').show();
        $('.phone').hide();
    });

    $("#show_phone").click(function() {
        $('.phone').show();
        $('.email').hide();
    });
});