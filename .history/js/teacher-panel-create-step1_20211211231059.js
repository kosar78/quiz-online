$(document).ready(function(){

    axios.get('http://localhost:3000/api/v1/course/ListOfProffCourses',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data.data);
        var coursesList=res.data.data
        for(let i=0;i<coursesList.length;i++){
            var option = document.createElement("option");
            var option_text = document.createTextNode(coursesList[i].name); 
            option.appendChild(option_text);
            document.getElementById("courses").appendChild(option);
            
        }
        
        $("#save-step1-info").click(function(){
            
            let test_title = document.querySelector('#test-title').value
            let course_name=document.querySelector('#courses').value
            let start_test_time=document.querySelector('#start-test-time').value
            let end_test_time=document.querySelector('#end-test-time').value
            var CourseId
            var questionTypeTorF=false
            var minesTorF=false
            var reviewTorF=false
            if(course_name=="انتخاب کنید"){
                CourseId=undefined
            }else{
                for(let i=0;i<coursesList.length;i++){
                    if(coursesList[i].name==course_name){
                        CourseId=coursesList[i].id
                    }
                    
                }
            }
            if($(".cr2 .circle-2").hasClass("choosed")){
                questionTypeTorF=true
            }
            if($("#mines").prop("checked")){
                minesTorF=true
            }
            if($("#reviewafterend").prop("checked")){
                reviewTorF=true
            }
            var sTime=""
            var sDay=""
            var smonth=""
            if(start_test_time.split("شنبه").length==1){
                sTime=start_test_time.split("جمعه")[1].split(" ")
                sDay=sTime[1]
                smonth=sTime[2]
            }else{
                sTime=start_test_time.split("شنبه")[1].split(" ")
                sDay=sTime[1]
                smonth=sTime[2]
            }
                if(smonth=="فروردین"){
                    smonth="1"
                }
                else if(smonth=="اردیبهشت"){
                    smonth="2"
                }
                else if(smonth=="خرداد"){
                    smonth="3"
                }
                else if(smonth=="تیر"){
                    smonth="4"
                }
                else if(smonth=="مرداد"){
                    smonth="5"
                }
                else if(smonth=="شهریور"){
                    smonth="6"
                }
                else if(smonth=="مهر"){
                    smonth="7"
                }
                else if(smonth=="آبان"){
                    smonth="8"
                }
                else if(smonth=="آذر"){
                    smonth="9"
                }
                else if(smonth=="دی"){
                    smonth="10"
                }
                else if(smonth=="بهمن"){
                    smonth="11"
                }
                else if(smonth=="اسفند"){
                    smonth="12"
                }
                var sYear=sTime[3]
                var sHour=sTime[5]
                var startTestTime=sYear+"/"+smonth+"/"+sDay
                console.log(start_test_time.split("شنبه"));
            
            
            console.log(end_test_time);
            var exam={
                courseId:CourseId,
                title:test_title,
                Archive:false,
                testordesc:false,
                questionType:questionTypeTorF,
                mines:minesTorF,
                review:reviewTorF
                
            }
        })

        
    })
    .catch(err => console.log(err))
})