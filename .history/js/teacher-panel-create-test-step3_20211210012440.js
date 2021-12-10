$(document).ready(function(){
    $(".add-new-option-btn").click(function(){
        $("<input class='option-input' type='text' placeholder='گزینه 3'>").insertBefore( ".add-new-option-btn" );
        var option=document.createElement("li");
        
        option.className="delete-student"
        
        ul.appendChild(li1)
        ul.appendChild(li2)
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