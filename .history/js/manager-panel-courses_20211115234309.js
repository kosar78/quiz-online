$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/user/my',{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log('get : ')
                
                document.getElementById("fullname").innerHTML = res.data.data.fullName;

                
                
            })
            .catch(err => console.log(err))
})