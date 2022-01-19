
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
                for(var i=0;i<questions.length;i++){
                    var i2=i+1
                    var answerChecked=""
                    var green=false
                    var red=false
                    var desc=""
                    var currectOption
                    for(var a=0;a<examsheet.answers.length;a++){
                        
                        if(examsheet.answers[a].questionId==questions[i].id){
                            answerChecked=examsheet.answers[a].ResponseDesc
                            console.log(answerChecked)
                        }
                    }
                    var divquestionbox=document.createElement("div");
                    var ul1=document.createElement("ul");
                    // var ul2=document.createElement("ul");
                    var ul1_li1=document.createElement("li");
                    var ul1_li2=document.createElement("li");
                    
                    

                    divquestionbox.className="question-box"
                    ul1_li1.className="question-number"
                    ul1_li2.className="question-face"
                    // ul2.className="q-options"
                    var textarea=document.createElement("textarea");
                    
                    textarea.className="answer-textarea"
                    textarea.id="answer-textarea"+i2
                    textarea.disabled=true
                    textarea.text(answerChecked)
                    var ul1_li1_text = document.createTextNode(i+1);
                    var ul1_li2_text = document.createTextNode(questions[i].ques.face);
                    ul1_li1.appendChild(ul1_li1_text)
                    ul1_li2.appendChild(ul1_li2_text)
                    ul1.appendChild(ul1_li1)
                    ul1.appendChild(ul1_li2)
                    var div=document.createElement("div");
                    var p=document.createElement("p");
                    p.className="message-for-view"
                    if(answerChecked==questions[i].answer.desc){
                        // green=true
                        div.classList="teacher-answer-for-review correct-answer"
                        var p_text = document.createTextNode("جواب شما صحیح است.");
                        p.appendChild(p_text)
                        div.appendChild(p)
                    }
                    else{
                        div.classList="teacher-answer-for-review incorrect-answer"
                        var p_text = document.createTextNode("جواب شما غلط است.");
                        p.appendChild(p_text)
                        var p1=document.createElement("p");
                        var p1_text = document.createTextNode("جواب صحیح :");
                        p1.appendChild(p1_text)
                        var p2=document.createElement("p");
                        var p2_text = document.createTextNode(desc);
                        p2.appendChild(p2_text)
                        div.appendChild(p)
                        div.appendChild(p1)
                        div.appendChild(p2)
                    }

                    
                    // if(green==true){
                        
                    // }
                    // else if(red==true){
                        
                        
                    // }
                    
                    // var div=document.createElement("div");
                    // var p=document.createElement("p");
                    // p.className="message-for-view"
                    // if(green==true){
                    //     div.classList="teacher-answer-for-review correct-answer"
                    //     var p_text = document.createTextNode("جواب شما صحیح است.");
                    //     p.appendChild(p_text)
                    //     div.appendChild(p)
                    // }
                    // else if(red==true){
                    //     div.classList="teacher-answer-for-review incorrect-answer"
                    //     var p_text = document.createTextNode("جواب شما غلط است.");
                    //     p.appendChild(p_text)
                    //     var p1=document.createElement("p");
                    //     var p1_text = document.createTextNode("جواب صحیح :");
                    //     p1.appendChild(p1_text)
                    //     var p2=document.createElement("p");
                    //     var p2_text = document.createTextNode(desc);
                    //     p2.appendChild(p2_text)
                    //     div.appendChild(p)
                    //     div.appendChild(p1)
                    //     div.appendChild(p2)
                        
                    // }
                    
                    divquestionbox.appendChild(ul1)
                    divquestionbox.appendChild(textarea)
                    divquestionbox.appendChild(div)
                    $(".question-boxs-father").append(divquestionbox)
                    // $(".answer-form").append(ul3)


                   
                    

                    c++
                }
                // // console.log("question : "+question)
                
            
            })
            .catch(err => console.log(err))  
    
        // }
        
       
    })
    .catch(err => console.log(err))  
    
    
    
})