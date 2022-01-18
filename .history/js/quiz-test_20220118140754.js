
$(document).ready(function(){
    let localStorage_Array=localStorage.toggled.split("|")
    localStorage.toggled=localStorage_Array[0]
    let result=localStorage_Array[1]
    console.log(result)
    axios.get('http://localhost:3000/api/v1/user/getUserById/'+result.studentId,{
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
        pass=res.data.data.password
        console.log(pass)
    })
    .catch(err => console.log(err))  
})