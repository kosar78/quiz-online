$(document).ready(function(){
    $(".show-pass1").click(function(){
        $(".show-pass1").css("display","none")
        $(".hide-pass1").css("display","block")
        var pass = document.getElementById("password");
        pass.type="text";

    })
    $(".hide-pass1").click(function(){
        $(".show-pass1").css("display","block")
        $(".hide-pass1").css("display","none")
        var pass = document.getElementById("password");
        pass.type="password";
    })
    $(".show-pass2").click(function(){
        $(".show-pass2").css("display","none")
        $(".hide-pass2").css("display","block")
        var pass = document.getElementById("comfirm-password");
        pass.type="text";

    })
    $(".hide-pass2").click(function(){
        $(".show-pass2").css("display","block")
        $(".hide-pass2").css("display","none")
        var pass = document.getElementById("comfirm-password");
        pass.type="password";
    })
    
})



let btn_signUp = document.querySelector('#btn-signup')
        
        let uni_id=""
        
        btn_signUp.addEventListener('click', function() {
        document.getElementById("message").style.color = "#d24d57"
        let uni_name = document.querySelector('#uni-name').value
        let user_fName = document.querySelector('#user-fName').value
        let user_lName = document.querySelector('#user-lName').value
        let username = document.querySelector('#username').value
        let password = document.querySelector('#password').value
        let email = document.querySelector('#email').value
        
        let uni = {
            name : uni_name,
            address : "my address"
        }
        
        axios.post('http://localhost:3000/api/v1/university/create',uni)
        .then(res =>{
            console.log('post : ')
            console.log(res.data.message);
            let ms=res.data.message
            
            if(ms=="یکی از فیلد های ضروری را پر نکرده اید"){
                uni_id=""    
            }
            else{
                uni_id =res.data.data.id
            }
            console.log(password);
            // user : admin
            let admin = {
                uniId : uni_id,
                fullName : user_fName + " " + user_lName,
                password : password,
                email : email,
                username : username,
                role : 'adminestor'
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
                    document.getElementById("link-signup-btn").href = "manager-panel-dashbord.html";
                    
                }
                document.querySelector('#message').innerHTML=ms;
            } )
            .catch(err => console.log(err))

            

            } )
        .catch(err => console.log(err))

        
    })
    