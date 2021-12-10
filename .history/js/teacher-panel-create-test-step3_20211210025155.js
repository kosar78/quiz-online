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
        var div4=document.createElement("div");
        
        div1.classList="col-xl-12 new-q"
        p1.classList="title-tx"
        div2.classList="line"
        div3.classList="row choose-q-type"
        ul1_li1.classList="typing-text-q choosen-type-q"
        ul1_li2.classList="uploading-pic-q"

        var p1_text = document.createTextNode("سوال شماره "+c);
        var ul1_li1_text = document.createTextNode("سوال متنی");
        var ul1_li2_text = document.createTextNode("تصویر سوال و گزینه ها");

        p1.appendChild(p1_text)
        ul1_li1.appendChild(ul1_li1_text)
        ul1_li2.appendChild(ul1_li2_text)

        
        ul1.appendChild(ul1_li1)
        ul1.appendChild(ul1_li2)
        div3.appendChild(ul)


        
        div1.appendChild(p1)
        div1.appendChild(div2)
        div1.appendChild(div3)



        var new_q=""
        $(new_q).insertBefore(".manage-q-a");
    })
    $(".typing-text-q").click(function(){
        $(this).parent().children(".uploading-pic-q").removeClass("choosen-type-q")
        $(this).addClass("choosen-type-q")
    })
})