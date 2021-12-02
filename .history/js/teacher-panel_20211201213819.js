$(document).ready(function(){
    $(".delete-from-list").click(function(){
        $("#deleteTest").modal("hide")
    })
    $(".not-delete").click(function(){
        $("#deleteTest").modal("hide")
    })
    
    $(".delete-test").click(function(){
        $("#deleteTest").modal("toggle")
    })
    $(".test-managment-icon").click(function(){
        $("#testType").modal("toggle")
    })
    $(".cancel").click(function(){
        $("#testType").modal("hide")
    })
    
    $(".delete-test").click(function(){
        $("#deleteTest").modal("toggle")
    })   
    
})