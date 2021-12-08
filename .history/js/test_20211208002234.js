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
        console.log(course_array)
        if(course_array.length==0){
            document.getElementById("empty-list").innerHTML = "لیست  دروس  خالی است";
        }
        else{
            let teachers_fullName=[]
            for(let i=0;i<course_array.length;i++){
                
                
                axios.get('http://localhost:3000/api/v1/user/getUserById/'+course_array[i].profId,{
                    headers: {
                        'Authorization' : `Bearer ${localStorage.toggled}`
                    }
                })
                .then(res =>{
                    
                    teachers_fullName=res.data.data.fullName
                    

                                
            

                })
                .catch(err => console.log(err)) 
                
            }
            console.log(teachers_fullName)
                


                

            

            
        
        
        


        }   
    
    })
    .catch(err => console.log(err))
    
    })   
    .catch(err => console.log(err))
                
})