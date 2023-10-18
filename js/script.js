$(document).ready(function() {
    $('#CheckIn').datepicker();
    $('#CheckOut').datepicker();
});


var AdultCount=document.querySelector('#AdultCount');
var AdultPlus=document.querySelector('.AdultPlus');
var AdultMinus=document.querySelector('.AdultMinus');
var count=0;
$('.AdultMinus').on('click',()=>{
    count--;
    if(count<0){
        count=0;
    }
    $('#AdultCount').html(count);
})
$('.AdultPlus').on('click',()=>{
    count++;
    $('#AdultCount').html(count);
    console.log($('#AdultCount').html());
})


var childCount=0;
$('.ChildPlus').on('click',()=>{
    childCount++;
    $('#ChildCount').html(childCount);
})
$('.ChildMinus').on('click',()=>{
    childCount--;
    if(childCount<0){
        childCount=0;
    }
    $('#ChildCount').html(childCount);
})

var bedCount=0;
$('.BedPlus').on('click',()=>{
    bedCount++;
    $('#BedCount').html(bedCount);
})
$('.BedMinus').on('click',()=>{
    bedCount--;
    if(bedCount<0){
        bedCount=0;
    }
    $('#BedCount').html(bedCount);
})