$(".circle-b").click(function(){
               
    if($(".circle-2").hasClass("unchoosed")){
        $(".circle-2").removeClass("unchoosed")
        $(".circle-2").addClass("choosed")
    }
    else if($(".circle-2").hasClass("choosed")){
        $(".circle-2").removeClass("choosed")
        $(".circle-2").addClass("unchoosed")
    }
})