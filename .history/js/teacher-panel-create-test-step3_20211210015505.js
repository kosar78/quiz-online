$(document).ready(function(){
    $(".add-new-option-btn").click(function(){
        $("<input class='option-input' type='text'>").insertBefore(this);
        var count = $(this).parent().parent().children(".q-options").children().length;
        count++;
        console.log(count)
        $(this).parent().children(".option-input").last().attr("placeholder","گزینه "+count)
        
        // var option=document.createElement("li");
        // option.className="q-option"
        // var op_text = document.createTextNode(count);
        // option.appendChild(op_text)
        // document.getElementById("q-options").appendChild(option)
        count=0
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