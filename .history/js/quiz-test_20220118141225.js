
$(document).ready(function(){
    let localStorage_Array=localStorage.toggled.split("|")
    localStorage.toggled=localStorage_Array[0]
    let result=localStorage_Array[1]
    console.log(result)
    axios.get('http://localhost:3000/api/v1/user/getUserById/'+result.studentId,{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log(res.data)
        
        document.querySelector('#student-name').value=res.data.data.fullName
       
    })
    .catch(err => console.log(err))  


    axios.get('http://localhost:3000/api/v1/exam/getById/'+result.examId,{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log(res.data)
        
        document.querySelector('#quiz-title1').value=res.data.data.title
       
    })
    .catch(err => console.log(err))  
})