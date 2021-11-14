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
        // let  = document.querySelector('#email').value
        
        // let uni = {
        //     name : uni_name,
        //     address : "my address"
        // }
        
        // axios.post('http://localhost:3000/api/v1/university/create',uni)
        // .then(res =>{
        //     console.log('post : ')
        //     console.log(res.data.message);
        //     let ms=res.data.message
            
        //     if(ms=="یکی از فیلد های ضروری را پر نکرده اید"){
        //         uni_id=""    
        //     }
        //     else{
        //         uni_id =res.data.data.id
        //     }
            // console.log(password);
            // user : admin
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
                //localStorage.toggled=res.data.data.token
                if(res.data.message!="با موفقیت ایجاد شد"){
                    ms=res.data.message
                }
                if(ms=="با موفقیت ایجاد شد"){
                    
                    document.getElementById("message").style.color = "#16a085";
                    
                    window.location.href = "signin.html";
                    
                }
                
                document.querySelector('#message').innerHTML=ms;
            })
            .catch(err => console.log(err))
   
    })
})
.catch(err => console.log(err))