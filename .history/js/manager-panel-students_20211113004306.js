$(document).ready(function(){
    $(".delete-from-list").click(function(){
        $("#deleteStudent").modal("hide")
    })
    $(".not-delete").click(function(){
        $("#deleteStudent").modal("hide")
    })
    
    $(".delete-student").click(function(){
        $("#deleteStudent").modal("toggle")
    })
        
    
})