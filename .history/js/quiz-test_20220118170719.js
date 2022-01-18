
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
    
   

    axios.get('http://localhost:3000/api/v1/examSheet/get',{
        
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        },
        body:{

            examId:result.examId,
            studentId:result.studentId
    
        }
    })
    .then(res =>{
        console.log(res.data)
        var q_num=res.data.data.quesOrder.length
        $('#quiz-q-number').text(q_num) 
        
        
       
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
        $('#quiz-time').text(res.data.data.quizTime)
        
       
    })
    .catch(err => console.log(err)) 
    

})