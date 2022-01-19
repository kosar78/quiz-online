$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/exam/listForStu',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data.data);
        var studentTestsArray=res.data.data;
        for(var i=0;i<studentTestsArray.length;i++){
            // $(this).parent().parent().children(".q-options").append(option)
            var c=i+1
            var divquizbox=document.createElement("div");
            var divhead=document.createElement("div");
            var ul1=document.createElement("ul");
            var ul2=document.createElement("ul");
            var ul3=document.createElement("ul");
            var ul4=document.createElement("ul");
            var ul5=document.createElement("ul");
            var ul6=document.createElement("ul");
            var ul1_li1=document.createElement("li");
            var ul1_li2=document.createElement("li");
            var ul2_li1=document.createElement("li");
            var ul2_li2=document.createElement("li");
            var ul3_li1=document.createElement("li");
            var ul3_li2=document.createElement("li");
            var ul4_li1=document.createElement("li");
            var ul4_li2=document.createElement("li");
            var ul5_li1=document.createElement("li");
            var ul5_li2=document.createElement("li");
            var ul6_li1=document.createElement("li");
            var ul6_li2=document.createElement("li");
            // var a1=document.createElement("a");
            var starttest_btn=document.createElement("input");
            var review_btn=document.createElement("input");
            

            divquizbox.className="quiz-box"
            divhead.className="head-quiz-box"
            ul1.style="margin-top: 50px;"
            starttest_btn.style="margin-left: 5px !important;"
            ul1_li1.className="li-titr"
            ul2_li1.className="li-titr"
            ul3_li1.className="li-titr"
            ul4_li1.className="li-titr"
            ul5_li1.className="li-titr"
            ul1_li2.className="q-info"
            ul2_li2.className="q-info"
            ul3_li2.className="q-info"
            ul4_li2.className="q-info"
            ul5_li2.className="q-info"
            // a1.href="student-review-quiz-tests.html"
            review_btn.value="مرور"
            starttest_btn.value="شرکت در آزمون"
            review_btn.type="button"
            starttest_btn.type="button"
            starttest_btn.className="start-the-test"+c
            review_btn.className="review-the-test"+c
            var divhead_text = document.createTextNode(studentTestsArray[i].title);
            var ul1_li1_text = document.createTextNode("زمان برگزاری آزمون : ");
            var ul2_li1_text = document.createTextNode("زمان پایان آزمون : ");
            var ul3_li1_text = document.createTextNode("کل زمان آزمون :");
            var ul4_li1_text = document.createTextNode("نوع آزمون : ");
            var ul5_li1_text = document.createTextNode("نمره : ");
            var ul5_li2_text = document.createTextNode(" داده نشده است.");
            var ul1_li2_text = document.createTextNode("در تاریخ "+studentTestsArray[i].start_date +" در ساعت "+studentTestsArray[i].start_time);
            var ul2_li2_text = document.createTextNode("در تاریخ "+studentTestsArray[i].end_date +" در ساعت "+studentTestsArray[i].end_time);
            var ul3_li2_text = document.createTextNode(studentTestsArray[i].quizTime+" دقیقه");
            var quiztype="تستی"
            if(studentTestsArray[i].testordesc==true){
                quiztype="تشریحی"
            }
            var ul4_li2_text = document.createTextNode(quiztype);

            ul1_li1.appendChild(ul1_li1_text)
            ul1_li2.appendChild(ul1_li2_text)
            ul2_li1.appendChild(ul2_li1_text)
            ul2_li2.appendChild(ul2_li2_text)
            ul3_li1.appendChild(ul3_li1_text)
            ul3_li2.appendChild(ul3_li2_text)
            ul4_li1.appendChild(ul4_li1_text)
            ul4_li2.appendChild(ul4_li2_text)
            ul5_li1.appendChild(ul5_li1_text)
            ul5_li2.appendChild(ul5_li2_text)

            divhead.appendChild(divhead_text)
            
            ul1.appendChild(ul1_li1)
            ul1.appendChild(ul1_li2)
            ul2.appendChild(ul2_li1)
            ul2.appendChild(ul2_li2)
            ul3.appendChild(ul3_li1)
            ul3.appendChild(ul3_li2)
            ul4.appendChild(ul4_li1)
            ul4.appendChild(ul4_li2)
            ul5.appendChild(ul5_li1)
            ul5.appendChild(ul5_li2)
            ul6_li1.appendChild(starttest_btn)
            // .appendChild(review_btn)
            ul6.appendChild(ul6_li1)
            ul6_li2.appendChild(review_btn)
            ul6.appendChild(ul6_li2)
            divquizbox.appendChild(divhead)
            divquizbox.appendChild(ul1)
            divquizbox.appendChild(ul2)
            divquizbox.appendChild(ul3)
            divquizbox.appendChild(ul4)
            divquizbox.appendChild(ul5)
            divquizbox.appendChild(ul6)
            
            $(".main-row-left").append(divquizbox)

            $(".start-the-test"+c).click(function(){
                // var now = new Date();
                // var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                // console.log(time)
                var quiz_title =$(this).parent().parent().parent().children(".head-quiz-box").text()
                var quizId=0
                var quiztype="تستی"
                for(var j=0;j<studentTestsArray.length;j++){
                    if(studentTestsArray[j].title==quiz_title){
                        quizId=studentTestsArray[j].id
                        if(studentTestsArray[j].testordesc==true){
                            quiztype="تشریحی"
                        }
                    }
                }

                axios.post('http://localhost:3000/api/v1/examSheet/create',{
                    examId:quizId
                   
                },{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
                })
                .then(res =>{
                    console.log('post : ')
                    console.log(res.data);
                    var result=res.data.data
                    if(result==undefined){
                        alert(res.data.message)
                    }
                    else{
                        if(result.status=="not Finished"){
                            var token={
                                token:localStorage.toggled
                            }
                            
                            var finalResult = Object.assign(result,token);
                            
                            // localStorage.toggled=new Object();
                            
                            finalResult = JSON.stringify(finalResult);
                            localStorage.toggled=finalResult
                            // console.log(localStorage.toggled)
                            
                            if(quiztype=="تستی"){
                                window.location.href = "quiz.html";
                            }
                            else if(quiztype=="تشریحی"){
                                window.location.href = "quiz-tashrihi.html";
                            }
                            
                        }
                        else{
                            alert("آزمون به اتمام رسیده است")
                        }
                    }
                        
                    // if(result.remainingTime!=0){

                        
                    // }
                    
                } )
                .catch(err => console.log(err))

            })




            $(".review-the-test"+c).click(function(){
                // var now = new Date();
                // var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
                // console.log(time)
                var quiz_title =$(this).parent().parent().parent().children(".head-quiz-box").text()
                var quizId=0
                var quiztype="تستی"
                for(var j=0;j<studentTestsArray.length;j++){
                    if(studentTestsArray[j].title==quiz_title){
                        quizId=studentTestsArray[j].id
                        if(studentTestsArray[j].testordesc==true){
                            quiztype="تشریحی"
                        }
                    }
                }
                axios.get('http://localhost:3000/api/v1/user/my',{
                    headers: {
                        'Authorization' : `Bearer ${localStorage.toggled}`
                    }
                })
                .then(res =>{
                    axios.get('http://localhost:3000/api/v1/examSheet/get/'+quizId+"/"+res.data.data.id,{
                        headers: {
                            'Authorization' : `Bearer ${localStorage.toggled}`
                        }
                        })
                        .then(res =>{
                            // console.log('post : ')
                            console.log(res.data);
                            var result=res.data.data
                            if(result==undefined){
                                alert(res.data.message)
                            }
                            else{
                                // if(result.status=="not Finished"){
                                    var token={
                                        token:localStorage.toggled
                                    }
                                    
                                    var finalResult = Object.assign(result,token);
                                    
                                    // localStorage.toggled=new Object();
                                    
                                    finalResult = JSON.stringify(finalResult);
                                    localStorage.toggled=finalResult
                                    // console.log(localStorage.toggled)
                                    
                                    if(quiztype=="تستی"){
                                        window.location.href = "student-review-quiz-tests.html";
                                    }
                                    else if(quiztype=="تشریحی"){
                                        window.location.href = "tudent-review-quiz-tashrihi.html";
                                    }
                                    
                                // }
                                // else{
                                //     alert("آزمون به اتمام رسیده است")
                                // }
                            }
                                
                            // if(result.remainingTime!=0){
        
                                
                            // }
                            
                        } )
                        .catch(err => console.log(err))                    
                    
                })
                .catch(err => console.log(err))


            })
        }
        
    })
    .catch(err => console.log(err))
})