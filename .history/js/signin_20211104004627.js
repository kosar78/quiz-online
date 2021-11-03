$(document).ready(function(){
    $(".show-pass").click(function(){
        $(".show-pass1").css("display","none")
        $(".hide-pass1").css("display","block")
        var pass = document.getElementById("password");
        pass.type="text";

    })
    $(".hide-pass").click(function(){
        $(".show-pass1").css("display","block")
        $(".hide-pass1").css("display","none")
        var pass = document.getElementById("password");
        pass.type="password";
    })
    
    
})