$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1//exam/list',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data.data);
        
        
    })
    .catch(err => console.log(err))
})