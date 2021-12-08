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
                let studentIds_array=[]

                    $(".course-student-btn").click(function(){
                        $("#student-table tbody tr").remove()
                        document.getElementById("empty-list-student").innerHTML =""
                        let courseName=$(this).parent().parent().children(".course-title-td").text()
        
                        for(let j=0;j<course_array.length;j++){
                            if(course_array[j].name==courseName){
                                studentIds_array=course_array[j].studentIds
                                break
                            }
                        }
                        if(studentIds_array.length==0){
                           
                            document.getElementById("empty-list-student").innerHTML = "لیست  دانشجویان  خالی است";
                            
                        }
                        else{
                            
                            for(let a=0;a<studentIds_array.length;a++){
                                axios.get('http://localhost:3000/api/v1/user/getUserById/'+studentIds_array[a],{
                                    headers: {
                                        'Authorization' : `Bearer ${localStorage.toggled}`
                                    }
                                })
                                .then(res =>{
                                    let student=res.data.data
                                    console.log(res.data.data)
                                    console.log("hh")
                                    var tr_s = document.createElement("tr");
                                    var td1_s = document.createElement("td");
                                    var td2_s = document.createElement("td");
                                    var td3_s = document.createElement("td");
                                    var td4_s = document.createElement("td");
                                    
                                    var td1_text_s = document.createTextNode(i+1);
                                    var td2_text_s = document.createTextNode(student.fullName);
                                    var td3_text_s = document.createTextNode(student.username);
                                    var td4_text_S = document.createTextNode(student.email);
                                    
                                    td1_s.appendChild(td1_text_s);
                                    td2_s.appendChild(td2_text_s);
                                    td3_s.appendChild(td3_text_s);
                                    td4_s.appendChild(td4_text_S);
                                    tr_s.appendChild(td1_s)
                                    tr_s.appendChild(td2_s)
                                    tr_s.appendChild(td3_s)
                                    tr_s.appendChild(td4_s)
                                    document.getElementById("list-student").appendChild(tr_s);
                                    
                                    
                                })
                                .catch(err => console.log(err))
                                
                            }
                        }
                        $("#students-course-list").modal("toggle")
                        
                    })


                

            

            
        
        
        


        }   
    
    })
    .catch(err => console.log(err))
    
    })   
    .catch(err => console.log(err))
                
})