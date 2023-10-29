$(document).ready(function() {
    $('#CheckIn').datepicker();
    $('#CheckOut').datepicker();
});

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 80,
        responsiveClass: true,
        center: true,
        nav: true,
        autoplay:true,
        navText: [
            "<i class='bi bi-arrow-left'></i>",
            "<i class='bi bi-arrow-right'></i>"
        ],
        responsive: {
            0: {
                items: 1.4,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 2,
            }
        }
    })
})