$(document).ready(function(){
    $(".cr1").click(function(){
               
        if($(".cr2").children(".circle-2").hasClass("unchoosed")){
            
            $("#li3").css("display","inline-block")
            $("#li4").css("display","inline-block")
            
            $(".cr1").children(".circle-2").removeClass("unchoosed")
            $(".cr1").children(".circle-2").addClass("choosed")

        }
        else if($(".cr2").children(".circle-2").hasClass("choosed")){
            $("#li3").css("display","inline-block")
            $("#li4").css("display","inline-block")

            $(".cr2").children(".circle-2").addClass("unchoosed")
            $(".cr2").children(".circle-2").removeClass("choosed")
            
            $(".cr1").children(".circle-2").removeClass("unchoosed")
            $(".cr1").children(".circle-2").addClass("choosed")
            
        }
    })
    $(".cr2").click(function(){
               
        if($(".cr1").children(".circle-2").hasClass("unchoosed")){
            
            
            $("#li3").css("display","none")
            $("#li4").css("display","none")
            $("#container-type3").css("display","none")
            $("#container-type4").css("display","none")
            $(".cr2").children(".circle-2").removeClass("unchoosed")
            $(".cr2").children(".circle-2").addClass("choosed")

            
        }
        else if($(".cr1").children(".circle-2").hasClass("choosed")){
            
            $("#li3").css("display","none")
            $("#li4").css("display","none")
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
        
    })
    $(".floating-type").click(function(){
        if($(this).children(".circle-2").hasClass("unchoosed")){
            
            
            
            $(".floating-type").children(".circle-2").addClass("unchoosed")
            $(".floating-type").children(".circle-2").removeClass("choosed")
            $(this).children(".circle-2").addClass("choosed")
            $(this).children(".circle-2").removeClass("unchoosed")
            
        }
        
    })
    $(".type4-circle").click(function(){
        if($(this).children(".circle-2").hasClass("unchoosed")){
            
            
            
            $(".type4-circle").children(".circle-2").addClass("unchoosed")
            $(".type4-circle").children(".circle-2").removeClass("choosed")
            $(this).children(".circle-2").addClass("choosed")
            $(this).children(".circle-2").removeClass("unchoosed")
            
        }
        
    })
    $("#type1").click(function(){
        $(".holding-type-container").css("display","none")
        
    })
    $("#type2").click(function(){
        $(".holding-type-container").css("display","none")
        $("#container-type2").css("display","block")
        
    })
    $("#type3").click(function(){
        $(".holding-type-container").css("display","none")
        $("#container-type3").css("display","block")
        
    })
    $("#type4").click(function(){
        $(".holding-type-container").css("display","none")
        $("#container-type4").css("display","block")
        
    })
    $("#floating-checkbox").click(function(){
        if(!$("#floating-checkbox").prop("checked")){
            $("#ul-check1").css("display","none")
            $("#ul-check2").css("display","none")
        }
        else{
            $("#ul-check1").css("display","block")
            $("#ul-check2").css("display","block")
        }
    })
    $(".example1").pDatepicker();
    $(".example2").pDatepicker();
      
})