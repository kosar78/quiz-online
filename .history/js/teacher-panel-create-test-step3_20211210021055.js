$(document).ready(function(){
    $(".add-new-option-btn").click(function(){
        $("<input class='option-input' type='text'>").insertBefore(this);
        var count = $(this).parent().parent().children(".q-options").children().length+1;
        
        $(this).parent(".typing-q").children(".option-input").last().attr("placeholder","گزینه "+count)
        var option=document.createElement("li");
        
        option.className="q-option"
        var op_text = document.createTextNode(count);
        option.appendChild(op_text)
        $(this).parent().parent().children(".q-options").append(option)
    })
    $(".uploading-pic-q").click(function(){
        $(this).addClass("choosen-type-q")
        $(".typing-text-q").removeClass("choosen-type-q")
    })

    $(".typing-text-q").click(function(){
        $(".uploading-pic-q").removeClass("choosen-type-q")
        $(this).addClass("choosen-type-q")
    })
})