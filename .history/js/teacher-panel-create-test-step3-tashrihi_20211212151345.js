$(document).ready(function(){
    let localStorage_Array3=localStorage.toggled.split("|")
    localStorage.toggled=localStorage_Array3[0]
    let examId=Number(localStorage_Array3[1])
    // let examId=11
    axios.get('http://localhost:3000/api/v1/user/my',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data.data.fullName);
        document.getElementById("fullname").innerHTML = res.data.data.fullName;
        
    })
    .catch(err => console.log(err))
    console.log(examId)
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
        
        var input1=document.createElement("input");
        
        var div5=document.createElement("div");
        
        var div6=document.createElement("div");
        var img=document.createElement("img");

        var div7=document.createElement("div");
        var p4=document.createElement("p");
        var textarea2=document.createElement("textarea");
        var div8=document.createElement("div");
        var ul5=document.createElement("ul");
        var ul5_li1=document.createElement("li");
        var ul5_input=document.createElement("input");
        var div9=document.createElement("div");
        var img3=document.createElement("img");
        
        


        var div1_class="new-q"+c
        div1.classList="col-xl-12 new-q "+div1_class
        var div6_class="placing-img"+c
        div6.classList="row placing-img "+div6_class
        p1.className="title-tx"
        div2.className="line"
        div3.classList="row choose-q-type"
        var class_ul1_li1="choosen-type-q"+c
        ul1_li1.classList="choosen-type-q "+class_ul1_li1
        var ul1_li1_class="imgInp"+c
        ul1_li1_input.classList="imgInp "+ul1_li1_class
        ul1_li1_input.type="file"
        ul1_li1_input.setAttribute("id","imgInp"+c);
        div4.classList="row typing-q"
        p2.className="top-input"
        var tx1_class="typing-q-textarea"+c
        textarea1.classList="typing-q-textarea "+tx1_class
        var input1_class="barom"+c
        input1.classList="barom "+input1_class
        
        div5.className="line"
        
        div7.classList="row answer"
        p4.classList="title-tx"
        var textarea2_class="typing-a-textarea"+c
        textarea2.classList="typing-a-textarea "+textarea2_class
        var div8_class="choose-a-type"+c
        div8.classList="row choose-a-type "+div8_class
        var ul5_input_class="imgInp-answer"+c
        ul5_input.classList="imgInp-answer "+ul5_input_class
        var ul5_li1_class="choosen-type-a"+c
        ul5_li1.classList="typing-text-a choosen-type-a "+ul5_li1_class
        var div9_class="placing-img-a"+c
        div9.classList="row placing-img-a "+div9_class
        

        

        textarea1.placeholder="صورت سوال را بنویسید"
        textarea2.placeholder="توضیح جواب"
        input1.type="number"
       
        ul5_input.type="file"
        input1.placeholder="بارم سوال"
        
        var p1_text = document.createTextNode("سوال شماره "+c);
        var ul1_li1_text = document.createTextNode("آپلود عکس سوال");
        var p2_text = document.createTextNode("متن سوال");
        
        var ul5_li1_text = document.createTextNode("آپلود عکس جواب");
        var p4_text = document.createTextNode("جواب");

        p1.appendChild(p1_text)
        p4.appendChild(p4_text)
        ul1.appendChild(ul1_li1_input)
        ul1_li1.appendChild(ul1_li1_text)

        ul5.appendChild(ul5_li1)
        p2.appendChild(p2_text)
        ul1.appendChild(ul1_li1)
        div3.appendChild(ul1)
        div4.appendChild(p2)
        div4.appendChild(textarea1)
        
        ul5.appendChild(ul5_input)
        ul5_li1.appendChild(ul5_li1_text)
        div8.appendChild(ul5)
        div9.appendChild(img3)
        div7.appendChild(p4)
        div7.appendChild(textarea2)
        div7.appendChild(div8)
        div7.appendChild(div9)

        div6.appendChild(img)

        div1.appendChild(p1)
        div1.appendChild(div2)
        div1.appendChild(div3)
        div1.appendChild(div6)
        div1.appendChild(div4)
        div1.appendChild(div7)
        div1.appendChild(div5)
        div1.appendChild(input1)

        
        $(div1).insertBefore(".manage-q-a");
        
        
        
        $(".choosen-type-q"+c).click(function(){
            var s="#imgInp"+c
            $(s).trigger("click");
            
            
        })
        $(".choosen-type-a"+c).click(function(){
            var s=".imgInp-answer"+c
            $(s).trigger("click");
            
            
        })
        $(".imgInp-answer"+c).on("change",function(){
            
            readURLA(this);
        });
        $("#imgInp"+c).on("change",function(){
            
            readURL(this);
        });
        function readURL(input) {
            console.log(input)
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = input.files[0];
                    
                    $(".placing-img"+c+" img").attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        function readURLA(input) {
            console.log(input)
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    var file = input.files[0];
                    
                    $(".placing-img-a"+c+" img").attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }


    })
    $("#final-registion").click(function(){
        
        var c=$(".main-row-left").children(".new-q").length;
        console.log(c)
        for(var i=0;i<c;i++){
            var i2=i+1
            var question={}
            var questionPic=$(".placing-img"+i2+" img").attr("src");
            if(questionPic==undefined){
                question={
                    examId:examId,
                    answerPic:answerPic,
                    ResponseTime:ResponseTime,
                    desc:desc,
                    Score:Score,
                    face:face
                }
            }
            var answerPic=$(".placing-img-a"+i2+" img").attr("src");
            if(answerPic==undefined){
                question={
                    examId:examId,
                    questionPic:questionPic,
                    
                    ResponseTime:ResponseTime,
                    desc:desc,
                    Score:Score,
                    face:face
                }
            }
            var ResponseTime=0
            var Score=Number($(".barom"+i2).val())
            var face=$(".typing-q-textarea"+i2).val()
            var desc=$(".typing-a-textarea"+i2).val() 
            question={
                examId:examId,
                questionPic:questionPic,
                answerPic:answerPic,
                ResponseTime:ResponseTime,
                desc:desc,
                Score:Score,
                face:face
            }
            axios.post('http://localhost:3000/api/v1/question/create',question,{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log('post : ')
                console.log(res.data);
                var ms=res.data
                
            } )
            .catch(err => console.log(err))

            console.log(question)
        }
        
    })
    
    $(".uploading-pic-q").click(function(){
        $(this).addClass("choosen-type-q")
        $(this).parent().children(".typing-text-q").removeClass("choosen-type-q")
    })
})