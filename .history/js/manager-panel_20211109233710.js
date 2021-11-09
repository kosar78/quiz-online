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
            $(".manage-profile-menubar").removeClass("show")
            $(".manage-profile-menubar").addClass("hide")
        }

    })
    
    $(".user-management li").click(function(){
        if($("#user-mangement-cases-icon-bottom").hasClass("show")){
            $("#user-mangement-cases-icon-bottom").removeClass("show")
            $("#user-mangement-cases-icon-bottom").addClass("hide")
            $("#user-mangement-cases-icon-top").addClass("show")
            $("#user-mangement-cases-icon-top").removeClass("hide")
            $(".user-management-cases").removeClass("hide")
            $(".user-management-cases").addClass("show")
        }
        else if($("#user-mangement-cases-icon-bottom").hasClass("hide")){
            $("#user-mangement-cases-icon-bottom").removeClass("hide")
            $("#user-mangement-cases-icon-bottom").addClass("show")
            $("#user-mangement-cases-icon-top").addClass("hide")
            $("#user-mangement-cases-icon-top").removeClass("show")
            $(".user-management-cases").removeClass("show")
            $(".user-management-cases").addClass("hide")
        }

    })
    $(".resize-sidebar").click(function(){
        if($(".resize-right").hasClass("show")){
            $(".resize-right").removeClass("show")
            $(".resize-right").addClass("hide")
            $(".resize-left").addClass("show")
            $(".resize-left").removeClass("hide")
            $(".sidebar-parent").removeClass("col-xl-3")
            $(".sidebar-parent").addClass("col-xl-1")
            $(".sidebar-parent").removeClass("col-md-3")
            $(".sidebar-parent").addClass("col-md-2")
            $(".left-side").removeClass("col-xl-9")
            $(".left-side").addClass("col-xl-11")
            $(".left-side").removeClass("col-md-9")
            $(".left-side").addClass("col-md-10")
            $(".sidebar-parent").addClass("small-sidebar")
        }
        else if($(".resize-right").hasClass("hide")){
            $(".resize-right").removeClass("hide")
            $(".resize-right").addClass("show")
            $(".resize-left").addClass("hide")
            $(".resize-left").removeClass("show")
            $(".sidebar-parent").addClass("col-xl-3")
            $(".sidebar-parent").removeClass("col-xl-1")
            $(".sidebar-parent").addClass("col-md-3")
            $(".sidebar-parent").removeClass("col-md-2")
            $(".left-side").addClass("col-xl-9")
            $(".left-side").removeClass("col-xl-11")
            $(".left-side").addClass("col-md-9")
            $(".left-side").removeClass("col-md-10")
            $(".sidebar-parent").removeClass("small-sidebar")
        }

    })
    $(".menubar").click(function(){
        $(".sidebar-parent").removeClass("hide")
        $(".sidebar-parent").addClass("show")
        $(".left-side").addClass("hide")
        $(".left-side").removeClass("show")
        $(".sidebar-parent").css("display","none")
    })
})