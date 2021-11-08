$(document).ready(function(){
    $(".manage-profile").click(function(){
        if($(".bottom").hasClass("show")){
            $(".bottom").removeClass("show")
            $(".bottom").addClass("hide")
            $(".top").addClass("show")
            $(".top").removeClass("hide")
            $(".manage-profile-menubar").removeClass("hide")
            $(".manage-profile-menubar").addClass("show")
        }
        else if($(".bottom").hasClass("hide")){
            $(".bottom").removeClass("hide")
            $(".bottom").addClass("show")
            $(".top").addClass("hide")
            $(".top").removeClass("show")
        }

    })
    
    
    
})