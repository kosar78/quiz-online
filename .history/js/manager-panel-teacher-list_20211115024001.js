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
            // let role="teacher"
            axios.get('http://localhost:3000/api/v1/user/list',
                {role: "teacher"},
                {
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
                // // 
                // data :{
                //     data :{
                //         role :"teacher"
                //     }
                // }
                
            })
            .then(res =>{
                console.log('get : ')
                console.log(res);
                // let teacher_array={}
                // let user_lenght
                // if(res.data.data)
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