$(document).ready(function(){
    $(".delete-from-list").click(function(){
        $("#deleteTeacher").modal("hide")
    })
    $(".not-delete").click(function(){
        $("#deleteTeacher").modal("hide")
    })
    
    $(".delete-test").click(function(){
        $("#deleteTeacher").modal("toggle")
    })
        
    
})