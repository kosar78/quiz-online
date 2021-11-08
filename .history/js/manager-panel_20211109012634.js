$(document).ready(function(){
    $(".manage-profile").click(function(){
        if($(".bottom").hasClass("show")){
            $(".bottom").removeClass("show")
            $(".bottom").addClass("hide")
            $(".top").addClass("show")
            $(".top").removeClass("hide")
        }
        else if($(".bottom").hasClass("hide")){
        
        }

    })
    $(".hide-pass").click(function(){
        $(".show-pass").css("display","block")
        $(".hide-pass").css("display","none")
        var pass = document.getElementById("password");
        pass.type="password";
    })
    
    
})