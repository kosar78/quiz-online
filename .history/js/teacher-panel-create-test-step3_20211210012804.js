$(document).ready(function(){
    $(".add-new-option-btn").click(function(){
        $("<input class='option-input' type='text' placeholder='گزینه 3'>").insertBefore( ".add-new-option-btn" );
        var option=document.createElement("li");
        var count = $(".q-options").children().length;
        option.className="q-option"
        
        $("").appendChild()
    })
    $(".uploading-pic-q").click(function(){
        $(".uploading-pic-q").addClass("choosen-type-q")
        $(".typing-text-q").removeClass("choosen-type-q")
    })

    $(".typing-text-q").click(function(){
        $(".uploading-pic-q").removeClass("choosen-type-q")
        $(".typing-text-q").addClass("choosen-type-q")
    })
})