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
        
    $(".upload-file-icon").click(function () {
        $("#fileInp").trigger('click');
    });
    $(".uploading .file-name").click(function () {
        $("#fileInp").trigger('click');
    });
    $("#fileInp").on("change",function(){
        readURL(this);
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var file = input.files[0];
                
                console.log(file);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
})