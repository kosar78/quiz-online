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
            var a1=document.createElement("a");
            var starttest_btn=document.createElement("input");
            var review_btn=document.createElement("input");
            

            divquizbox.className="quiz-box"
            divhead.className="head-quiz-box"
            ul1.style="margin-top: 50px;"
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
            a1.href="student-review-quiz-tests.html"
            review_btn.value="مرور"
            starttest_btn.value="شرکت در آزمون"
            review_btn.type="button"
            starttest_btn.type="button"

            var divhead_text = document.createTextNode(studentTestsArray[i].title);
            var ul1_li1_text = document.createTextNode("زمان برگزاری");
            var ul2_li1_text = document.createTextNode("زمان پایان");
            var ul3_li1_text = document.createTextNode("کل زمان آزمون");
            var ul4_li1_text = document.createTextNode("نوع آزمون");
            var ul5_li1_text = document.createTextNode("نمره");
            var ul5_li2_text = document.createTextNode(" داده نشده است.");
            var ul1_li2_text = document.createTextNode(studentTestsArray[i].start_date +" "+studentTestsArray[i].start_time);
            var ul2_li2_text = document.createTextNode(studentTestsArray[i].end_date +" "+studentTestsArray[i].end_time);
            var ul3_li2_text = document.createTextNode("120");
            var quiztype="تسنی"
            if(studentTestsArray[i].testordesc)
            var ul4_li2_text = document.createTextNode(studentTestsArray[i].end_date +" "+studentTestsArray[i].end_time);
            
            
            
        }
        
    })
    .catch(err => console.log(err))
})