$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/exam/listForProf',{

        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
        
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data);
        
        
        
    })
    .catch(err => console.log(err))
})