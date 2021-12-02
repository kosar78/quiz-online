$(document).ready(function(){
    $(".cr1").click(function(){
               
        if($(".cr2").children(".circle-2").hasClass("unchoosed")){
            
            $(".cr2").children(".circle-2").addClass("unchoosed")
            $(".cr2").children(".circle-2").removeClass("choosed")
            if($(".cr2").children(".circle-2").hasClass("choosed")){
                $(".cr1").children(".circle-2").removeClass("unchoosed")
                $(".cr1").children(".circle-2").addClass("choosed")
            }else{
                $(".cr1").children(".circle-2").removeClass("choosed")
                $(".cr1").children(".circle-2").addClass("unchoosed")
            }
        }
        else if($(".cr2").children(".circle-2").hasClass("choosed")){
            // $(".cr1").children(".circle-2").removeClass("choosed")
            // $(".cr1").children(".circle-2").addClass("unchoosed")


            $(".cr2").children(".circle-2").addClass("unchoosed")
            $(".cr2").children(".circle-2").removeClass("choosed")
            if($(".cr1").children(".circle-2").hasClass("choosed")){
                $(".cr1").children(".circle-2").removeClass("unchoosed")
                $(".cr1").children(".circle-2").addClass("choosed")
            }else{
                $(".cr1").children(".circle-2").removeClass("choosed")
                $(".cr1").children(".circle-2").addClass("unchoosed")
            }
        }
    })
    $(".cr1").click(function(){
               
        if($(".cr1").children(".circle-2").hasClass("unchoosed")){
            $(".cr1").children(".circle-2").removeClass("unchoosed")
            $(".cr1").children(".circle-2").addClass("choosed")
        }
        else if($(".cr1").children(".circle-2").hasClass("choosed")){
            $(".cr1").children(".circle-2").removeClass("choosed")
            $(".cr1").children(".circle-2").addClass("unchoosed")
        }
    })
})