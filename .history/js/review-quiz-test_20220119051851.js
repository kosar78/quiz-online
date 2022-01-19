
$(document).ready(function(){
    
    // let localStorage_Array=localStorage.toggled.split("|")
    // console.log(localStorage_Array)
    // localStorage.toggled=localStorage_Array[0]
    // let result=localStorage_Array[1]
    // console.log(result.studentId)
    var result=JSON.parse(localStorage.toggled)
    // var result=localStorage.toggled
    localStorage.toggled=result.token
    console.log(localStorage.toggled)
    
    axios.get('http://localhost:3000/api/v1/user/getUserById/'+result.studentId,{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log(res.data)
        
        $('#student-name').text(res.data.data.fullName)
       
    })
    .catch(err => console.log(err))  
    
   

    

    axios.get('http://localhost:3000/api/v1/exam/getById/'+result.examId,{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log(res.data)
        
        $('#quiz-title1').text(res.data.data.title)
        $('#quiz-title2').text(res.data.data.title)
        $('#quiz-time').text(res.data.data.quizTime+" دقیقه")
        $('#quiz-q-number').text(res.data.data.numfQuestion)


       
    })
    .catch(err => console.log(err)) 
    

    axios.get('http://localhost:3000/api/v1/examSheet/get/'+result.examId+"/"+result.studentId,{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        
        var examsheet=res.data.data
        // var questionIds=examsheet.quesOrder
        // console.log(questionIds)
        // for(var i=0;i<questionIds.length;i++){
            axios.get('http://localhost:3000/api/v1/question/getByExId/'+result.examId,{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log(res.data.data)

                var questions=res.data.data
                var c=1
                var an=0
                for(var i=0;i<questions.length;i++){
                    var answerChecked=1
                    if(questions[i].answers[an].questionId==questions[i].id){
                        answerChecked=questions[i].answers[i].ResponseTest
                    }
                    var divquestionbox=document.createElement("div");
                    var ul1=document.createElement("ul");
                    var ul2=document.createElement("ul");
                    var ul1_li1=document.createElement("li");
                    var ul1_li2=document.createElement("li");
                    
                    var ul3=document.createElement("ul");
                    ul3.className="answer-option-unclicked"
                    var ul3_li1=document.createElement("li");
                    ul3_li1.className="q-num"
                    var ul3_li1_text=document.createTextNode(i+1);
                    ul3_li1.appendChild(ul3_li1_text)
                    ul3.appendChild(ul3_li1)

                    divquestionbox.className="question-box"
                    ul1_li1.className="question-number"
                    ul1_li2.className="question-face"
                    ul2.className="q-options"

                    var ul1_li1_text = document.createTextNode(i+1);
                    var ul1_li2_text = document.createTextNode(questions[i].ques.face);
                    ul1_li1.appendChild(ul1_li1_text)
                    ul1_li2.appendChild(ul1_li2_text)
                    ul1.appendChild(ul1_li1)
                    ul1.appendChild(ul1_li2)
                    for(var j=0;j<questions[i].ques.options.length;j++){
                        
                        var i2=i+1
                        var j2=j+1
                        var li=document.createElement("li");
                        var input=document.createElement("input");
                        var label=document.createElement("label");
                        input.id="option"+i2+"-"+j2
                        input.className="option"+c
                        input.name="option"+i2
                        input.type="radio"
                        input.disabled
                        if(j2==answerChecked){
                            input.checked
                        }
                        label.setAttribute("for","option"+i2+"-"+j2)
                        var label_text = document.createTextNode(questions[i].ques.options[j]);

                        // var ul3_li=document.createElement("li");
                        // ul3_li.className="q-option"
                        // ul3_li.id="q-option"+i2+"-"+j2
                        // var ul3_li_text = document.createTextNode(j2);
                        // ul3_li.appendChild(ul3_li_text)
                        // ul3.appendChild(ul3_li)

                        label.appendChild(label_text)
                        li.appendChild(input)
                        li.appendChild(label)
                        ul2.appendChild(li)

                    }
                    divquestionbox.appendChild(ul1)
                    divquestionbox.appendChild(ul2)
                    $(".question-boxs-father").append(divquestionbox)
                    // $(".answer-form").append(ul3)


                   
                    $(".option"+c).click(function(){
                        
                        var opID=$(this).attr('id')
                        opID=opID.substr(6).split("-")
                        var answersheet={
                            questionId:questions[opID[0]-1].id,
                            ResponseTest:opID[1],
                            // ResponseDesc:,
                            examId:result.examId
                        }
                        $("#q-option"+opID[0]+"-"+opID[1]).parent().children("li").removeClass("answered")
                        $("#q-option"+opID[0]+"-"+opID[1]).addClass("answered")
                        if($("#q-option"+opID[0]+"-"+opID[1]).parent().hasClass("answer-option-unclicked")){
                            $("#q-option"+opID[0]+"-"+opID[1]).parent().removeClass("answer-option-unclicked")
                            $("#q-option"+opID[0]+"-"+opID[1]).parent().addClass("answer-option-clicked")
                        }
                        axios.put('http://localhost:3000/api/v1/examSheet/update',answersheet,{
                            headers: {
                                'Authorization' : `Bearer ${localStorage.toggled}`
                            }
                        })
                        .then(res =>{
                            console.log(res.data)
                            
                        
                        })
                        .catch(err => console.log(err))  
                    })

                    c++
                }
                // // console.log("question : "+question)
                
            
            })
            .catch(err => console.log(err))  
    
        // }
        
       
    })
    .catch(err => console.log(err))  
    
    
    $("#end-quiz-btn").click(function(){
        var link="http://localhost:3000/api/v1/examsheet/finish/"+result.examId
        
        axios.put(link,{
            headers: {
                "Authorization" : `Bearer ${localStorage.toggled}`
            }
        })
        .then(res =>{
            console.log(res.data)
            window.location.href = "student-panel-myquiz.html";
        
        })
        .catch(err => console.log(err))
    })
})