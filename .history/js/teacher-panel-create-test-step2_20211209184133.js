$(document).ready(function(){
    $(".delete-from-list").click(function(){
        $("#deleteFile").modal("hide")
    })
    $(".not-delete").click(function(){
        $("#deleteFile").modal("hide")
    })
    
    $(".delete-test").click(function(){
        $("#deleteFile").modal("toggle")
    })
        
    
})