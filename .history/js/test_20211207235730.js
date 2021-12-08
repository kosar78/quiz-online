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

            for(let i=0;i<course_array.length;i++){
                
                
                axios.get('http://localhost:3000/api/v1/user/getUserById/'+course_array[i].profId,{
                    headers: {
                        'Authorization' : `Bearer ${localStorage.toggled}`
                    }
                })
                .then(res =>{
                    let teacher_fullName=""
                    console.log(res.data.data)
                    teacher_fullName=res.data.data.fullName
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    var td5 = document.createElement("td");
    
                    var ul=document.createElement("ul");
                    var li1=document.createElement("li");
                    var li2=document.createElement("li");
                    var img1=document.createElement("img");
                    var img2=document.createElement("img");
                    var a=document.createElement("a");
                    var p=document.createElement("p");
                    p.className="course-student-btn"
                    td2.className="course-title-td"
                    td3.className="teacher-course-title-td"
                    ul.className="edit-delete";
                    img1.className="delete-course"
                    img2.className="edit-course"
                    img1.src="images/delete-icon.svg"
                    img2.src="images/edit-icon.svg"
                    a.href="manager-panel-addCourse.html"
    
                    ul.appendChild(li1)
                    ul.appendChild(li2)
                    li1.appendChild(img1)
                    li2.appendChild(a)
                    a.appendChild(img2)
                    td4.appendChild(p)
                    var td1_text = document.createTextNode(i+1);
                    var td2_text = document.createTextNode(course_array[i].name);
                    var td3_text = document.createTextNode(teacher_fullName);
                    var td4_text = document.createTextNode("دانشجویان");
                    
                    td1.appendChild(td1_text);
                    td2.appendChild(td2_text);
                    td3.appendChild(td3_text);
                    p.appendChild(td4_text);
                    td5.appendChild(ul);
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    tr.appendChild(td4)
                    tr.appendChild(td5)
                    document.getElementById("list").appendChild(tr);
                    

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
                                    
                                    td1_s.appendChild(td1_text);
                                    td2_s.appendChild(td2_text);
                                    td3_s.appendChild(td3_text);
                                    td4_s.appendChild(td4_text);
                                    tr_s.appendChild(td1)
                                    tr_s.appendChild(td2)
                                    tr_s.appendChild(td3)
                                    tr_s.appendChild(td4)
                                    document.getElementById("list-student").appendChild(tr_s);
                                    
                                    
                                })
                                .catch(err => console.log(err))
                                
                            }
                        }
                        $("#students-course-list").modal("toggle")
                        
                    })            
            

                })
                .catch(err => console.log(err)) 
                
                

                


                

            }

            // let user_array=res.data.data
            let j=0
            
        
        
        


        }   
    
    })
    .catch(err => console.log(err))
    
    })   
    .catch(err => console.log(err))
                
})