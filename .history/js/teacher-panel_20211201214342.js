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
    $(".add-new-test").click(function(){
        $("#testType").modal("toggle")
    })
    $(".cancel").click(function(){
        $("#testType").modal("hide")
    })
    
    // $(".test-type-btns").click(function(){
    //     $("#testType").modal("hide")
    // })   
    
})