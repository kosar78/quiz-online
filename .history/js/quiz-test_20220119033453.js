
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
        $('#quiz-title3').text(res.data.data.title)
        $('#quiz-time').text(res.data.data.quizTime+" دقیقه")
        $('#quiz-q-number').text(res.data.data.numfQuestion)


                
        const FULL_DASH_ARRAY = 283;
        const WARNING_THRESHOLD = 10;
        const ALERT_THRESHOLD = 5;

        const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
        };
        var minandsec=result.remainingTime.split(":")
        var allmin=parseInt(minandsec[0])*60+parseInt(minandsec[1])
        const TIME_LIMIT = allmin;
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
        let remainingPathColor = COLOR_CODES.info.color;

        document.getElementById("app").innerHTML = `
        <div class="base-timer">
        <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remaining ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">${formatTime(
            timeLeft
        )}</span>
        </div>
        `;

        startTimer();

        function onTimesUp() {
        clearInterval(timerInterval);
        }

        function startTimer() {
        timerInterval = setInterval(() => {
            timePassed = timePassed += 1;
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML = formatTime(
            timeLeft
            );
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
            onTimesUp();
            }
        }, 1000);
        }

        function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
        }

        function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
        }
        }

        function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        }

        function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
        }
       
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
                        label.setAttribute("for","option"+i2+"-"+j2)
                        var label_text = document.createTextNode(questions[i].ques.options[j]);

                        var ul3_li=document.createElement("li");
                        ul3_li.className="q-option"
                        ul3_li.id="q-option"+i2+"-"+j2
                        var ul3_li_text = document.createTextNode(j2);
                        ul3_li.appendChild(ul3_li_text)
                        ul3.appendChild(ul3_li)

                        label.appendChild(label_text)
                        li.appendChild(input)
                        li.appendChild(label)
                        ul2.appendChild(li)

                    }
                    divquestionbox.appendChild(ul1)
                    divquestionbox.appendChild(ul2)
                    $(".question-boxs-father").append(divquestionbox)
                    $(".answer-form").append(ul3)


                   
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
        axios.put('http://localhost:3000/api/v1/examsheet/finish/',result.examId,{
            headers: {
                'Authorization' : `Bearer ${localStorage.toggled}`
            }
        })
        .then(res =>{
            console.log(res.data)
            
        
        })
        .catch(err => console.log(err))
    })
})