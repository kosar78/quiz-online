$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/user/my',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
    console.log('get : ')
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    axios.get('http://localhost:3000/api/v1/course/list',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
        
    })
    .then(res =>{
        console.log('get : ')
        let course_array=res.data.data
        if(course_array.length==0){
            document.getElementById("empty-list").innerHTML = "لیست  دروس  خالی است";
        }
        else{
            let user_array=res.data.data
            let j=0
            let student_array=[]
            $(".course-student-btn").click(function(){
                let courseName=$(this).parent().parent().children(".course-title-td").text()
                let teacherCourseName=$(this).parent().parent().children(".teacher-course-title-td").text()

            })
            
        
        
        


        }   
    
    })
    .catch(err => console.log(err))
    
    })   
    .catch(err => console.log(err))
                
})