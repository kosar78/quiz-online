axios.get('http://localhost:3000/api/v1/user/my',{
    headers: {
        'Authorization' : `Bearer ${localStorage.toggled}`
    }
})
.then(res =>{
    console.log('get : ')
    console.log(res.data.data.fullName);
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    let save = document.querySelector('#save-teacher-info')
        
        // let uni_id=""
        
        save.addEventListener('click', function() {
        // document.getElementById("message").style.color = "#d24d57"
        let firstName = document.querySelector('#firstname').value
        let lastName = document.querySelector('#lastname').value
        let username = document.querySelector('#username').value
        let password = document.querySelector('#password').value
        let email = document.querySelector('#email').value
        let uni_id =res.data.data.id
        let ms="با موفقیت ایجاد شد"
            let admin = {
                uniId : uni_id,
                fullName : firstName + " " + lastName,
                password : password,
                email : email,
                username : username,
                role : 'teacher'
            }
            axios.post('http://localhost:3000/api/v1/user/create',admin)
            .then(res =>{
                console.log('post : ')
                console.log(res.data.message);
                
                if(res.data.message!="با موفقیت ایجاد شد"){
                    ms=res.data.message
                }
                if(ms=="با موفقیت ایجاد شد"){
                    
                    document.getElementById("message").style.color = "#16a085";
                    
                    window.location.href = "manager-panel-teacherlist.html";
                    
                }
                
                document.querySelector('#message').innerHTML=ms;
            })
            .catch(err => console.log(err))
   
    })
})
.catch(err => console.log(err))