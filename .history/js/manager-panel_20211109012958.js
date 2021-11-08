$(document).ready(function(){
    $(".manage-profile").click(function(){
        if($(".bottom").hasClass("show")){
            $(".bottom").removeClass("show")
            $(".bottom").addClass("hide")
            $(".top").addClass("show")
            $(".top").removeClass("hide")
        }
        else if($(".bottom").hasClass("hide")){
            $(".bottom").removeClass("hide")
            $(".bottom").addClass("show")
            $(".top").addClass("hide")
            $(".top").removeClass("show")
        }

    })
    
    
    
})