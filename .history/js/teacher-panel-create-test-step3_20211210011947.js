$(document).ready(function(){
    $(".add-new-option-btn").click(function(){
        $("<input class='option-input' type='text' placeholder='گزینه 3'>").insertBefore( ".add-new-option-btn" );
    })
    $(".uploading-pic-q").click(function(){
        $(".uploading-pic-q").addClass("choosen-type-q")
        $(".typing-text-q").removeClass("choosen-type-q")
    })
})