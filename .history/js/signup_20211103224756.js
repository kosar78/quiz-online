$(document).ready(function(){
    $(".show-pass1").click(function(){
        $(".show-pass1").css("display","none")
        $(".hide-pass1").css("display","block")
        var pass = document.getElementById("password");
        pass.type="text";

    })
    $(".hide-pass1").click(function(){
        $(".show-pass1").css("display","block")
        $(".hide-pass1").css("display","none")
        var pass = document.getElementById("password");
        pass.type="password";
    })
    $(".show-pass2").click(function(){
        $(".show-pass2").css("display","none")
        $(".hide-pass2").css("display","block")
        var pass = document.getElementById("comfirm-password");
        pass.type="text";

    })
    $(".hide-pass2").click(function(){
        $(".show-pass2").css("display","block")
        $(".hide-pass2").css("display","none")
        var pass = document.getElementById("comfirm-password");
        pass.type="password";
    })
})