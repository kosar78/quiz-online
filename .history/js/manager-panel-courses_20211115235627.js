$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/user/my',{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log('get : ')
                document.getElementById("fullname").innerHTML = res.data.data.fullName;

                axios.get('http://localhost:3000/api/v1/user/list',{
                    headers: {
                        'Authorization' : `Bearer ${localStorage.toggled}`
                    }
  
            })
            .then(res =>{
                console.log('get : ')
                
                let user_array=res.data.data
                let j=0
                let u=0
                let teacher_array={}
                let student_array={}
                for(let i=0;i<user_array.length;i=i+1){
                    if(user_array[i].role=="student"){
                        student_array[j]=user_array[i]
                        j=j+1
                    }
                    else if(user_array[i].role=="teacher"){
                        teacher_array[u]=user_array[i]
                        u=u+1
                    }
                }
                
                let studentlist_lenght=j
                let teacherlist_lenght=u
                console.log(teacherlist_lenght)
                for(let i=0;i<teacherlist_lenght;i=i+1){
                    var option = document.createElement("option");
                    var option_text = document.createTextNode(teacher_array[i].fullName); 
                    option.appendChild(option_text);
                    document.getElementById("teachers").appendChild(option);
                }
                // console.log(teacher_array);
                // console.log(userlist_lenght)
                if(userlist_lenght==0){
                    document.getElementById("empty-list").innerHTML = "لیست  دانشجویان  خالی است";
                }
                else{
                    for(let i=0;i<studentlist;i=i+1){
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

                        ul.className="edit-delete";
                        img1.className="delete-student"
                        img2.className="edit-student"
                        img1.src="images/delete-icon.svg"
                        img2.src="images/edit-icon.svg"
                        a.href="manager-panel-addStudent.html"

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
                            $("#deleteStudent").modal("hide")
                        })
                        $(".not-delete").click(function(){
                            $("#deleteStudent").modal("hide")
                        })
                        
                        $(".delete-student").click(function(){
                            $("#deleteStudent").modal("toggle")
                        })
                            
                        
                    })
                }
                
            })
            .catch(err => console.log(err))

                
            })
            .catch(err => console.log(err))
})