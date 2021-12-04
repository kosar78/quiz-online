
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
                    role : "teacher"
                },
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                },
                
                
                
            })
            .then(res =>{
                console.log('get : ')
                
                let user_array=res.data.data
                let j=0
                let teacher_array={}
                for(let i=0;i<user_array.length;i=i+1){
                    if(user_array[i].role=="teacher"){
                        teacher_array[j]=user_array[i]
                        j=j+1
                    }
                }
                
                let userlist_lenght=j
                console.log(teacher_array);
                console.log(userlist_lenght)
                if(userlist_lenght==0){
                    document.getElementById("empty-list").innerHTML = "لیست اساتید خالی است";
                }
                else{
                    for(let i=0;i<userlist_lenght;i=i+1){
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

                        td4.className="teacher-email-td4"
                        ul.className="edit-delete";
                        img1.className="delete-teacher"
                        img2.className="edit-teacher"
                        img1.src="images/delete-icon.svg"
                        img2.src="images/edit-icon.svg"
                        a.href="manager-panel-addteacher.html"

                        ul.appendChild(li1)
                        ul.appendChild(li2)
                        li1.appendChild(img1)
                        li2.appendChild(a)
                        a.appendChild(img2)

                        var td1_text = document.createTextNode(i+1);
                        var td2_text = document.createTextNode(teacher_array[i].username);
                        var td3_text = document.createTextNode(teacher_array[i].fullName);         // Create a text node
                        var td4_text = document.createTextNode(teacher_array[i].email);
                        
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

                            axios.delete('http://localhost:3000/api/v1/user/deleteUser',{
                                body:{
                                    "id" : teacherId
                                }
                            })
                            .then(res =>{
                                console.log("done : "+res.data)
                            })
                            .catch(err => console.log(err))                            
                            })
                        $(".not-delete").click(function(){
                            $("#deleteTeacher").modal("hide")
                        })
                        
                        $(".delete-teacher").click(function(){
                            let tEmail=$(this).parent().parent().parent().parent().children(".teacher-email-td4").text()
                            for(let g=0;g<teacher_array.lenght;g++){
                                if(teacher_array[g]==tEmail){
                                    console.log(teacher_array[g].id
                                        )
                                    teacherId=teacher_array[g].id
                                    break
                                }
                            }
                            $("#deleteTeacher").modal("toggle")
                        })
                            
                        
                    })
                }
                
            })
            .catch(err => console.log(err))
   
})
.catch(err => console.log(err))



