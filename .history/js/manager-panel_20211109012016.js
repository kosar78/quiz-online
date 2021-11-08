$(document).ready(function(){
    $(".manage-profile").click(function(){
        

    })
    $(".hide-pass").click(function(){
        $(".show-pass").css("display","block")
        $(".hide-pass").css("display","none")
        var pass = document.getElementById("password");
        pass.type="password";
    })
    
    
})