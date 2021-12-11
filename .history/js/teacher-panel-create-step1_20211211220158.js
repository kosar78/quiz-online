$(document).ready(function(){

    axios.get('http://localhost:3000/api/v1/course/ListOfProffCourses',{
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
})