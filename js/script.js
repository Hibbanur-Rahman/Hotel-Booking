$(document).ready(function() {
    $('#CheckIn').datepicker();
    $('#CheckOut').datepicker();
});

$(document).ready(function() {
    $('#rooms').owlCarousel({
        loop: true,
        margin: 80,
        responsiveClass: true,
        center: true,
        nav: true,
        autoplay:true,
        autoplayHoverPause:true,
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

$(document).ready(function(){
    $('#testimonial_slider').owlCarousel({
        navigation:true,
        loop: true,
        margin: 20,
        responsiveClass: true,
        center: true,
        nav: true,
        autoplay: true,
        autoplayHoverPause:true,
        items:3,
        smartSpeed:500,
        autoplayTimeout:3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
        
    })
})

//tab for services
var spa=$('#spa');
var restaurant=$('#restaurant');
var suites=$('#suites');
var swimming=$('#swimming');

var spaTab=$('#spaTab');
var restaurantTab=$('#restaurantTab');
var suitesTab=$('#suitesTab');
var swimmingTab=$('#swimmingTab');


var spaCount=true;
var restaurantCount=false;
var suitesCount=false;
var swimmingCount=false;

spa.addClass('active');
restaurant.addClass('hide');
suites.addClass('hide');
swimming.addClass('hide');


spaTab.on('click', ()=>{
    if(spaCount==true){
        spa.removeClass('active');
        spa.addClass('hide');
        spa.toggle('active');
        spaCount=false;
    }
    else{
        spa.removeClass('hide');
        spa.addClass('active');
        spa.toggle('active');
        spaCount=true;
    }
    restaurant.addClass('hide');
    suites.addClass('hide');
    swimming.addClass('hide');

    restaurantCount=false;
    suitesCount=false;
    swimmingCount=false;
})
restaurantTab.on('click', ()=>{
    if(restaurantCount==true){
        restaurant.removeClass('active');
        restaurant.addClass('hide');
        restaurant.toggle('active');
        restaurantCount=false;
    }
    else{
        restaurant.removeClass('hide');
        restaurant.addClass('active');
        restaurant.toggle('active');
        restaurantCount=true;
    }
    spa.addClass('hide');
    suites.addClass('hide');
    swimming.addClass('hide');

    spaCount=false;
    suitesCount=false;
    swimmingCount=false;
})

suitesTab.on('click',()=>{
    if(suitesCount==true){
        suites.removeClass('active');
        suites.addClass('hide');
        suites.toggle('active');
        suitesCount=false;
    }
    else{
        suites.removeClass('hide');
        suites.addClass('active');
        suites.toggle('active');
        suitesCount=true;
    }
    spa.addClass('hide');
    restaurant.addClass('hide');
    swimming.addClass('hide');

    spaCount=false;
    restaurantCount=false;
    swimmingCount=false;
})


swimmingTab.on('click',()=>{
    if(swimmingCount==true){
        swimming.removeClass('active');
        swimming.addClass('hide');
        swimming.toggle('active');
        swimmingCount=false;
    }
    else{
        swimming.removeClass('hide');
        swimming.addClass('active');
        swimming.toggle('active');
        swimmingCount=true;
    }
    spa.addClass('hide');
    restaurant.addClass('hide');
    suites.addClass('hide');

    spaCount=false;
    restaurantCount=false;
    suitesCount=false;
})