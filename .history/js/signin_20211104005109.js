$(document).ready(function(){
    $(".show-pass").click(function(){
        $(".show-pass").css("display","none")
        $(".hide-pass").css("display","block")
        var pass = document.getElementById("password");
        pass.type="text";

    })
    $(".hide-pass").click(function(){
        $(".show-pass").css("display","block")
        $(".hide-pass").css("display","none")
        var pass = document.getElementById("password");
        pass.type="password";
    })
    
    
})