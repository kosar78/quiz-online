axios.get('http://localhost:3000/api/v1/user/my',{
    headers: {
        'Authorization' : `Bearer ${localStorage.toggled}`
    }
})
.then(res =>{
    console.log('get : ')
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    // let save = document.querySelector('#save-student-info')
    
    let uni_id =res.data.data.id
        
        // save.addEventListener('click', function() {
        // document.getElementById("message").style.color = "#d24d57"
        // let firstName = document.querySelector('#firstname').value
        // let lastName = document.querySelector('#lastname').value
        // let username = document.querySelector('#username').value
        // let password = document.querySelector('#password').value
        // let email = document.querySelector('#email').value
        
        
            // let admin = {
            //     uniId : uni_id,
            //     fullName : firstName + " " + lastName,
            //     password : password,
            //     email : email,
            //     username : username,
            //     role : 'student'
            // }
            let role="teacher"
            axios.get('http://localhost:3000/api/v1/user/list',{
                
                params :{
                    role : "teacher"
                },
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                },
                
                
                
            })
            .then(res =>{
                console.log('get : ')
                
                let teacher_array=res.data.data
                let userlist_lenght=teacher_array.length
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
                        

                        var td1_text = document.createTextNode(i+1);
                        var td2_text = document.createTextNode(teacher_array[i].username);
                        var td3_text = document.createTextNode(teacher_array[i].fullName);         // Create a text node
                        var td4_text = document.createTextNode(teacher_array[i].email);
                        // var td5_text = document.createTextNode();
                        

                        td1.appendChild(td1_text);
                        td2.appendChild(td2_text);
                        td3.appendChild(td3_text);
                        td4.appendChild(td4_text);
                        tr.appendChild(td1)
                        tr.appendChild(td2)
                        tr.appendChild(td3)
                        tr.appendChild(td4)
                        // td1.appendChild(td1_text);
                                                      // Append the text to <li>
                        document.getElementById("list").appendChild(tr);     
                    }
                }
                // let ms=res.data.message
                // if(ms=="با موفقیت ایجاد شد"){
                    
                //     document.getElementById("message").style.color = "#16a085";
                    
                //     window.location.href = "manager-panel-studentlist.html";
                    
                // }
                
                // document.querySelector('#message').innerHTML=ms;
            })
            .catch(err => console.log(err))
   
    // })
})
.catch(err => console.log(err))