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
    $( "select" ).change(function() {
        var str = "";
        $( "select option:selected" ).each(function() {
            str += $( this ).text() + " ";
            if(str=="فایل جواب"){
                $(".file-date-div").css("display","flex !important")
            }
            else if(str=="فایل سوال"){
                $(".file-showtime-div").css("display","flex !important")
            }
            console.log(str)
        });
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
                $(".file-name").html(file.name)
                
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
})