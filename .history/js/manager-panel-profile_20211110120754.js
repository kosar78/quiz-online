$(document).ready(function(){
    $(".upload-img-icon").click(function () {
        $("#imgInp").trigger('click');
    });
    $("#imgInp").on("change",function(){
        readURL(this);
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var file = input.files[0];
                // $("#place-image").removeClass("icon-place");
                // $("#place-image").css("display","block");
                $('.profile-admin-img').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
})