// let btn_signIn = document.querySelector('#btn-signin')
        
//         btn_signIn.addEventListener('click', function() {
        // document.getElementById("message").style.color = "#d24d57";
        // let user_fullname = document.querySelector('#')
        // let password = document.querySelector('#password').value
            const fullname=""
            // user : admin
            // let admin = {
            //     username : username,
            //     password : password
                
            // }
            // let token=""
            axios.get('http://localhost:3000/api/v1/user/my')
            .then(res =>{
                console.log('get : ')
                console.log(res);
                // console.log(token)
                // document.querySelector('#fullname').innerHTML=res.data.data.fullname
                // let ms=res.data.message
                // if(ms=="با موفقیت وارد شدید"){
                //     document.getElementById("message").style.color = "#16a085";

                    
                // }
                // window.location.href = "manager-panel-dashbord.html";
                // document.querySelector('#message').innerHTML=ms;
            } )
            .catch(err => console.log(err))

        
    // })