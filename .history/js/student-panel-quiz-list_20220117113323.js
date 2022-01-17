$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/exam/listForStu',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data.data);
        var studentTestsArray=res.data.data;
        for(var i=0;i<studentTestsArray.length;i++){
            // $(this).parent().parent().children(".q-options").append(option)

            
        }
        
    })
    .catch(err => console.log(err))
})