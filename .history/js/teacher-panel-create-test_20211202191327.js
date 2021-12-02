$(document).ready(function(){
    $(".circle-b").click(function(){
               
        if($(this).children(".circle-2").hasClass("unchoosed")){
            $(this).children(".circle-2").removeClass("unchoosed")
            $(this).children(".circle-2").addClass("choosed")
        }
        else if($(this).children(".circle-2").hasClass("choosed")){
            $(this).children(".circle-2").removeClass("choosed")
            $(this).children(".circle-2").addClass("unchoosed")
        }
    })
})