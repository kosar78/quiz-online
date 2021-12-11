$(document).ready(function(){

    axios.get('http://localhost:3000/api/v1/course/ListOfProffCourses',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
        console.log('get : ')
        console.log(res.data.data);
        var coursesList=res.data.data
        for(let i=0;i<coursesList.length;i++){
            var option = document.createElement("option");
            var option_text = document.createTextNode(coursesList[i].name); 
            option.appendChild(option_text);
            document.getElementById("courses").appendChild(option);
            
        }
        
        $("#save-step1-info").click(function(){
            
            let test_title = document.querySelector('#test-title').value
            let course_name=document.querySelector('#courses').value
            
            if(course_name=="انتخاب کنید"){
                course_name=undefined
            }
            var exam={
                title:test_title,
    
            }
        })

        
    })
    .catch(err => console.log(err))
})