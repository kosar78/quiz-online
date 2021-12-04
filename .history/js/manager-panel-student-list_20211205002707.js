axios.get('http://localhost:3000/api/v1/user/my',{
    headers: {
        'Authorization' : `Bearer ${localStorage.toggled}`
    }
})
.then(res =>{
    console.log('get : ')
    let teacherId=""
    document.getElementById("fullname").innerHTML = res.data.data.fullName;

            axios.get('http://localhost:3000/api/v1/user/list',{
                
                body :{
                    role : "student"
                },
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                },
                
                
                
            })
            .then(res =>{
                console.log('get : ')
                
                let user_array=res.data.data
                let j=0
                let student_array={}
                for(let i=0;i<user_array.length;i=i+1){
                    if(user_array[i].role=="student" && user_array[i].deleted==false){
                        student_array[j]=user_array[i]
                        j=j+1
                    }
                }
                
                let userlist_lenght=j
                console.log(student_array);
                console.log(userlist_lenght)
                if(userlist_lenght==0){
                    document.getElementById("empty-list").innerHTML = "لیست  دانشجویان  خالی است";
                }
                else{
                    for(let i=0;i<userlist_lenght;i=i+1){
                        var tr = document.createElement("tr");
                        var td1 = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        var td4 = document.createElement("td");
                        var td5 = document.createElement("td");

                        td4.className="student-email-td4"
                        var ul=document.createElement("ul");
                        var li1=document.createElement("li");
                        var li2=document.createElement("li");
                        var img1=document.createElement("img");
                        var img2=document.createElement("img");
                        // var a=document.createElement("a");

                        ul.className="edit-delete";
                        img1.className="delete-student"
                        img2.className="edit-student"
                        img1.src="images/delete-icon.svg"
                        img2.src="images/edit-icon.svg"
                        // a.href="manager-panel-addStudent.html"

                        ul.appendChild(li1)
                        ul.appendChild(li2)
                        li1.appendChild(img1)
                        li2.appendChild(img2)
                        // a.appendChild(img2)

                        var td1_text = document.createTextNode(i+1);
                        var td2_text = document.createTextNode(student_array[i].username);
                        var td3_text = document.createTextNode(student_array[i].fullName);         // Create a text node
                        var td4_text = document.createTextNode(student_array[i].email);
                        
                        td1.appendChild(td1_text);
                        td2.appendChild(td2_text);
                        td3.appendChild(td3_text);
                        td4.appendChild(td4_text);
                        td5.appendChild(ul);
                        tr.appendChild(td1)
                        tr.appendChild(td2)
                        tr.appendChild(td3)
                        tr.appendChild(td4)
                        tr.appendChild(td5)
                        
                        document.getElementById("list").appendChild(tr);     
                    }
                    $(document).ready(function(){
                        $(".delete-from-list").click(function(){

                            axios.delete('http://localhost:3000/api/v1/user/deleteUser/'+studentId,{
                                
                                headers: {
                                    'Authorization' : `Bearer ${localStorage.toggled}`
                                },
                            })
                            .then(res =>{
                                console.log(res.data)

                                window.location.href = "manager-panel-studentlist.html";
                            })
                            .catch(err => console.log(err))                            
                            })
                        $(".not-delete").click(function(){
                            $("#deleteStudent").modal("hide")
                        })
                        
                        $(".delete-student").click(function(){
                            let tEmail=$(this).parent().parent().parent().parent().children(".student-email-td4").text()
                            console.log(tEmail)
                            for(let g=0;g<userlist_lenght;g++){
                                if(teacher_array[g].email==tEmail){
                                    console.log(teacher_array[g].id)
                                    teacherId=teacher_array[g].id
                                    break
                                }
                            }
                            $("#deleteStudent").modal("toggle")
                        })
                        
                        

                        $(".edit-student").click(function(){
                            let token=localStorage.toggled
                            let tEmail=$(this).parent().parent().parent().parent().children(".student-email-td4").text()
                            console.log(tEmail)
                            for(let g=0;g<userlist_lenght;g++){
                                if(teacher_array[g].email==tEmail){
                                    console.log(teacher_array[g].id)
                                    teacherId=teacher_array[g].id
                                    localStorage.toggled=token+"|"+studentId

                                    break
                                }

                            }
                            window.location.href="manager-panel-student-edit.html"
                        })
                        
                    })
                }
                
            })
            .catch(err => console.log(err))
   
})
.catch(err => console.log(err))



