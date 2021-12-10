$(document).ready(function(){
        
    $(".add-new-q").click(function(){
        var c=$(".main-row-left").children(".new-q").length+1;
        var div1=document.createElement("div");
        var p1=document.createElement("p");
        var div2=document.createElement("div");
        var div3=document.createElement("div");
        var ul1=document.createElement("ul");
        var ul1_li1=document.createElement("li");
        var ul1_li1_input=document.createElement("input");
        var div4=document.createElement("div");
        var p2=document.createElement("p");
        var textarea1=document.createElement("textarea");
        var p3=document.createElement("p");
        var input1=document.createElement("input");
        var input2=document.createElement("input");
        var ul2=document.createElement("ul");
        var ul2_li1=document.createElement("li");
        var ul2_li2=document.createElement("li");
        var ul2_li2_img=document.createElement("img");

        var ul4=document.createElement("ul");
        var ul4_li1=document.createElement("li");
        var ul4_li2=document.createElement("li");
        var ul4_li2_img=document.createElement("img");
        var div5=document.createElement("div");
        var ul3=document.createElement("ul");
        var ul3_li1=document.createElement("li");
        var ul3_li2=document.createElement("li");
        var div6=document.createElement("div");
        var img=document.createElement("img");

        div1.classList="col-xl-12 new-q"
        var div6_class="placing-img"+c
        div6.classList="row placing-img "+div6_class
        p1.className="title-tx"
        div2.className="line"
        div3.classList="row choose-q-type"
        var class_ul1_li1="choosen-type-q"+c
        ul1_li1.classList="choosen-type-q "+class_ul1_li1
        var ul1_li1_class="imgInp"+c
        ul1_li1_input.classList="imgInp "+ul1_li1_class
        ul1_li1_input.setAttribute("id","imgInp"+c);
        div4.classList="row typing-q"
        p2.className="top-input"
        textarea1.className="typing-q-textarea"
        p3.className="title-tx"
        input1.classList="option-input option-input1"
        input2.classList="option-input option-input2"
        var ul2_class="add-new-option-btn"+c
        ul2.classList="add-new-option-btn "+ul2_class
        var ul4_class="delete-last-option-btn"+c
        ul4.classList="delete-last-option-btn "+ul4_class
        div5.className="line"
        ul3.className="q-options"
        ul3_li1.className="q-option"
        ul3_li2.className="q-option"

        textarea1.placeholder="صورت سوال را بنویسید"
        input1.type="text"
        input2.type="text"
        input1.placeholder="گزینه 1"
        input2.placeholder="گزینه 2"
        ul2_li2_img.src="images/add-student-toClass.svg"
        ul4_li2_img.src="images/akar-icons_minus.svg"

        var p1_text = document.createTextNode("سوال شماره "+c);
        var ul1_li1_text = document.createTextNode("آپلود عکس");
        var ul1_li2_text = document.createTextNode("تصویر سوال و گزینه ها");
        var p2_text = document.createTextNode("متن سوال");
        var p3_text = document.createTextNode("گزینه ها :");
        var ul2_li1_text = document.createTextNode("افزودن گزینه");
        var ul4_li1_text = document.createTextNode("حذف گزینه");
        var ul3_li1_text = document.createTextNode("1");
        var ul3_li2_text = document.createTextNode("2");


        p1.appendChild(p1_text)
        ul1.appendChild(ul1_li1_input)
        ul1_li1.appendChild(ul1_li1_text)
        p2.appendChild(p2_text)
        p3.appendChild(p3_text)
        ul1.appendChild(ul1_li1)
        div3.appendChild(ul1)
        div4.appendChild(p2)
        div4.appendChild(textarea1)
        div4.appendChild(p3)
        div4.appendChild(input1)
        div4.appendChild(input2)
        ul2_li1.appendChild(ul2_li1_text)
        ul2_li2.appendChild(ul2_li2_img)
        ul2.appendChild(ul2_li1)
        ul2.appendChild(ul2_li2)
        div4.appendChild(ul2)

        ul4_li1.appendChild(ul4_li1_text)
        ul4_li2.appendChild(ul4_li2_img)
        ul4.appendChild(ul4_li1)
        ul4.appendChild(ul4_li2)
        div4.appendChild(ul4)
        ul3_li1.appendChild(ul3_li1_text)
        ul3_li2.appendChild(ul3_li2_text)
        ul3.appendChild(ul3_li1)
        ul3.appendChild(ul3_li2)
        div6.appendChild(img)

        div1.appendChild(p1)
        div1.appendChild(div2)
        div1.appendChild(div3)
        div1.appendChild(div6)
        div1.appendChild(div4)
        div1.appendChild(div5)
        div1.appendChild(ul3)

        
        $(div1).insertBefore(".manage-q-a");
        $(".add-new-option-btn"+c).click(function(){
            $("<input class='option-input' type='text'>").insertBefore(this);
            var count = $(this).parent().parent().children(".q-options").children().length+1;
            $(this).parent(".typing-q").children(".option-input").last().addClass("option-input"+count)
            $(this).parent(".typing-q").children(".option-input").last().attr("placeholder","گزینه "+count)
            var option=document.createElement("li");
            var op_class="q-option"+c
            option.classList="q-option "+op_class
            var op_text = document.createTextNode(count);
            option.appendChild(op_text)
            $(this).parent().parent().children(".q-options").append(option)
            
        })

        
        $(".delete-last-option-btn"+c).click(function(){
            $(this).parent(".typing-q").children(".option-input").last().remove();
            $(this).parent().parent().children(".q-options").children().last().remove();
        })
        $(".choosen-type-q"+c).click(function(){
            
            $("#imgInp"+c).trigger("change");
            
            
        })
        
        $("#imgInp"+c).on("change",function(){
            
            readURL(this);
        });
        function readURL(input) {
            console.log(this)
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = input.files[0];
                    
                    $(".placing-img"+c+" img").attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
    })
    
    
    $(".uploading-pic-q").click(function(){
        $(this).addClass("choosen-type-q")
        $(this).parent().children(".typing-text-q").removeClass("choosen-type-q")
    })
})