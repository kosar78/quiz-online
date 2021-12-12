// let localStorage_Array4=localStorage.toggled.split("|")
// localStorage.toggled=localStorage_Array4[0]
// let examId=localStorage_Array4[1]
        
            axios.get('http://localhost:3000/api/v1/user/my',{
                headers: {
                    'Authorization' : `Bearer ${localStorage.toggled}`
                }
            })
            .then(res =>{
                console.log('get : ')
                console.log(res.data.data.fullName);
                document.getElementById("fullname").innerHTML = res.data.data.fullName;
                
            })
            .catch(err => console.log(err))