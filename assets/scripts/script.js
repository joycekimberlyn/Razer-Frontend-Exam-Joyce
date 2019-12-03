
$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});



$(window).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><div class="inner-dot"></div></div>';
            }
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            }
        }
    });
})

$(document).ready(function () {
    $('#myModal').on('show.bs.modal', function (e) {
        var image = $(e.relatedTarget.previousElementSibling).attr('src');
        $('.img-responsive').attr('src', image.replace(' xs', ''));
    });
});

AOS.init({
    duration: 1800,
})

function openNav(param) {
    document.getElementById(param).style.width = "100%";
}

function closeNav(param) {
    document.getElementById(param).style.width = "0%";
}

function closeOpenNav(a, b) {
    closeNav(a);
    openNav(b);
}