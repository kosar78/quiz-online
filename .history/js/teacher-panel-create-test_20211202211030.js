$(document).ready(function(){
    $(".cr1").click(function(){
               
        if($(".cr2").children(".circle-2").hasClass("unchoosed")){
            
            
            
            $(".cr1").children(".circle-2").removeClass("unchoosed")
            $(".cr1").children(".circle-2").addClass("choosed")

        }
        else if($(".cr2").children(".circle-2").hasClass("choosed")){
            
            $(".cr2").children(".circle-2").addClass("unchoosed")
            $(".cr2").children(".circle-2").removeClass("choosed")
            
            $(".cr1").children(".circle-2").removeClass("unchoosed")
            $(".cr1").children(".circle-2").addClass("choosed")
            
        }
    })
    $(".cr2").click(function(){
               
        if($(".cr1").children(".circle-2").hasClass("unchoosed")){
            
            
            
            $(".cr2").children(".circle-2").removeClass("unchoosed")
            $(".cr2").children(".circle-2").addClass("choosed")
            
        }
        else if($(".cr1").children(".circle-2").hasClass("choosed")){
            
            $(".cr1").children(".circle-2").addClass("unchoosed")
            $(".cr1").children(".circle-2").removeClass("choosed")
            
            $(".cr2").children(".circle-2").removeClass("unchoosed")
            $(".cr2").children(".circle-2").addClass("choosed")
            
        }
    })
    $(".holding-type").click(function(){
        if($(this).children(".circle-2").hasClass("unchoosed")){
            
            
            
            $(".holding-type").children(".circle-2").addClass("unchoosed")
            $(".holding-type").children(".circle-2").removeClass("choosed")
            $(this).children(".circle-2").addClass("choosed")
            $(this).children(".circle-2").removeClass("unchoosed")
            
        }
        else if($(".cr1").children(".circle-2").hasClass("choosed")){
            
           
            
        }
    })
})