let localStorage_Array=localStorage.toggled.split("|")
localStorage.toggled=localStorage_Array[0]
let teacherId=localStorage_Array[1]
console.log(localStorage_Array)
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
    document.querySelector('#firstname').value
    document.querySelector('#lastname').value
    document.querySelector('#username').value
    document.querySelector('#password').value
    document.querySelector('#email').value
        let uni_id =res.data.data.uniId
        
        save.addEventListener('click', function() {
        document.getElementById("message").style.color = "#d24d57"
        let firstName = document.querySelector('#firstname').value
        let lastName = document.querySelector('#lastname').value
        let username = document.querySelector('#username').value
        let password = document.querySelector('#password').value
        let email = document.querySelector('#email').value
        
        
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
                let ms=res.data.message
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