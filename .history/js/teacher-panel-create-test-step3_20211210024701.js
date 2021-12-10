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
        $(this).parent().children(".typing-text-q").removeClass("choosen-type-q")
    })
    $(".add-new-q").click(function(){
        var c=$(".main-row-left").children(".new-q").length+1;
        console.log(c)
        var div1=document.createElement("div");
        var p1=document.createElement("p");
        var div2=document.createElement("div");
        var div3=document.createElement("div");
        var ul1=document.createElement("ul");
        var ul1_li1=document.createElement("li");
        var ul1_li2=document.createElement("li");

        div1.classList="col-xl-12 new-q"
        p1.classList="title-tx"
        div2.classList="line"
        div3.classList="row choose-q-type"
        ul1_li1.classList="row choose-q-type"
        ul1_li2.classList="row choose-q-type"

        var p1_text = document.createTextNode("سوال شماره "+c);

        div1.appendChild(p1)
        ul1.appendChild(ul1_li1)
        ul1.appendChild(ul1_li2)
        div3.appendChild(ul)


        var new_q=""
        $(new_q).insertBefore(".manage-q-a");
    })
    $(".typing-text-q").click(function(){
        $(this).parent().children(".uploading-pic-q").removeClass("choosen-type-q")
        $(this).addClass("choosen-type-q")
    })
})