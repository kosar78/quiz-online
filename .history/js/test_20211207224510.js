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
        
        axios.get('http://localhost:3000/api/v1/user/list',{
            headers: {
                'Authorization' : `Bearer ${localStorage.toggled}`
            }

        })
        .then(res =>{
            let user_array=res.data.data
            let j=0
            let student_array=[]
            $(".course-student-btn").click(function(){
                


            })

            

            for(let d=0;course_array.length;d++){
                let course_students_id=course_array[d].studentIds;
                console.log(course_students_id)
                let course_teacher_id=course_array[d].profId
                let course_students_array=[]
                let teacher_fullName=""
                for(let b=0;b<course_students_id.length;b++){
                    axios.get('http://localhost:3000/api/v1/user/getUserById/'+course_students_id[b],{
                        headers: {
                            'Authorization' : `Bearer ${localStorage.toggled}`
                        }
                    })
                    .then(res =>{
                        console.log(res.data)
                        
                        document.querySelector('#firstname').value=Fullname[0]
                        document.querySelector('#lastname').value=LastName_sum
                        document.querySelector('#username').value=res.data.data.username
                        document.querySelector('#email').value=res.data.data.email
                        pass=res.data.data.password
                        console.log(pass)
                    })
                    .catch(err => console.log(err))                    
                }

                // for(let i=0;i<user_array.length;i++){
                //     if(user_array[i].role=="student"){
                //         student_array[j]=user_array[i]
                //         j=j+1
                //     }
                //     else if(user_array[i].role=="teacher"  && user_array[i].id==course_teacher_id){
                //         teacher_fullName=user_array[i].fullName
                //     }
                // }
                // for(let c=0;c<j;c++){
                //     for(let b=0;b<course_students_id.length;b++){
                //         if(student_array[c].id==course_students_id[b]){
                //             course_students_array=student_array[c]
                //         }
                //     }

                    
                // }

            }
        
        })
        .catch(err => console.log(err))


    }
    
    })
    .catch(err => console.log(err))
    
    })   
    .catch(err => console.log(err))
                
})