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
                for(let i=0;i<user_array.length;i++){
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
                
                for(let i=0;i<u;i++){
                    var option = document.createElement("option");
                    var option_text = document.createTextNode(teacher_array[i].fullName); 
                    option.appendChild(option_text);
                    document.getElementById("teachers").appendChild(option);
                    
                }
                
                // console.log(userlist_lenght)
                if(studentlist_lenght==0){
                    document.getElementById("empty-list").innerHTML = "لیست  دانشجویان  خالی است";
                }
                else{
                    for(let i=0;i<studentlist_lenght;i=i+1){
                        var tr = document.createElement("tr");
                        var td1 = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        var td4 = document.createElement("td");
                        var td5 = document.createElement("td");

                        var ul=document.createElement("ul");
                        var li1=document.createElement("li");
                        var img1=document.createElement("img");

                        ul.className="add-to-class";
                        img1.src="images/add-student-toClass.svg"

                        ul.appendChild(li1)
                        li1.appendChild(img1)

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
                    $(".add-to-class").click(function(){
                        $(this).parent().parent().css("background"," rgba(62, 81, 150, 0.05)")
                        
                        console.log($(this).parent().parent())
                    })
                    
                        
                   
                }
                
            })
            .catch(err => console.log(err))
            
                
            })
            .catch(err => console.log(err))



            
            
                
})