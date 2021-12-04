let localStorage_Array=localStorage.toggled.split("|")
localStorage.toggled=localStorage_Array[0]
let teacherId=localStorage_Array[1]

axios.get('http://localhost:3000/api/v1/user/my',{
    headers: {
        'Authorization' : `Bearer ${localStorage_Array[0]}`
    }
})
.then(res =>{
    console.log('get : ')
    console.log(res.data.data.fullName);
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    let save = document.querySelector('#save-teacher-info')
    console.log(localStorage_Array)
    axios.get('http://localhost:3000/api/v1/user/getUserById/'+teacherId,{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log(res.data)
        let Fullname=res.data.data.fullName.split(" ")
        let LastName_sum=""
        for(let i=1;i<Fullname.length;i++){
            if(i<Fullname.length-1){
                LastName_sum=LastName_sum+Fullname[i]+" "
            }
            else
            {
                LastName_sum=LastName_sum+Fullname[i]
            }
            
        }
        document.querySelector('#firstname').value=Fullname[0]
        document.querySelector('#lastname').value=LastName_sum
        document.querySelector('#username').value=res.data.data.username
        document.querySelector('#email').value=res.data.data.email
    })
    .catch(err => console.log(err))    


    
        let uni_id =res.data.data.uniId
        
        save.addEventListener('click', function() {
        document.getElementById("message").style.color = "#d24d57"
        let firstName = document.querySelector('#firstname').value
        let lastName = document.querySelector('#lastname').value
        let username = document.querySelector('#username').value
        let password = document.querySelector('#password').value
        let email = document.querySelector('#email').value
        let admin={}
        if(password==""){
            
        }
        else{
            admin = {
                id : teacherId,
                fullName : firstName + " " + lastName,
                password : password,
                username : username,
                email : email
                
            }
        }
                
        
            
            axios.post('http://localhost:3000/api/v1/user/updateUser',admin,{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log('update : ')
                console.log(res.data.message);
                let ms=res.data.message
                if(ms=="کاربر با موفقیت ویرایش شد"){
                    
                    document.getElementById("message").style.color = "#16a085";
                    
                    window.location.href = "manager-panel-teacherlist.html";
                    
                }
                
                document.querySelector('#message').innerHTML=ms;
            })
            .catch(err => console.log(err))
   
    })
})
.catch(err => console.log(err))