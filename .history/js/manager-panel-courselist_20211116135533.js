$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/user/my',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
    })
    .then(res =>{
    console.log('get : ')
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    let uni_id=res.data.data.uniId

    axios.get('http://localhost:3000/api/v1/course/list',{
        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
        
    })
    .then(res =>{
        console.log('get : ')
        let course_array=res.data.data
        let course_students_id=course_array.studentIds
        let course_teacher_id=course_array.profId
        let course_uni_id=course_array.uniId
        let course_title=course_array.course_name
        axios.get('http://localhost:3000/api/v1/user/list',{
            headers: {
                'Authorization' : `Bearer ${localStorage.toggled}`
            }

        })
        .then(res =>{
            console.log('get : ')
            
            let user_array=res.data.data
            let j=0
            let u=0
            // let teacher_array=[]
            let student_array=[]
            let studentIds_array=[]
            let teacher_fullName
            
            let stid_n=0
            for(let i=0;i<user_array.length;i++){
                if(user_array[i].role=="student"){
                    student_array[j]=user_array[i]
                    j=j+1
                }
                else if(user_array[i].role=="teacher"  && user_array[i].id==course_teacher_id){
                    teacher_fullName=user_array[i].fullName
                    // u=u+1
                }
            }
            
            let studentlist_lenght=j
            
            // for(let i=0;i<u;i++){
            //     var option = document.createElement("option");
            //     var option_text = document.createTextNode(teacher_array[i].fullName); 
            //     option.appendChild(option_text);
            //     document.getElementById("teachers").appendChild(option);
                
            // }
            
            // console.log(userlist_lenght)
            if(studentlist_lenght==0){
                document.getElementById("empty-list").innerHTML = "????????  ??????????????????  ???????? ??????";
            }
            else{
                for(let i=0;i<studentlist_lenght;i=i+1){
                    var tr = document.createElement("tr");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    var td5 = document.createElement("td");

                    var ul=document.createElement("ul");
                    var li1=document.createElement("li");
                    var img1=document.createElement("img");

                    // ul.classList="add-to-class";
                    img1.src="images/add-student-toClass.svg"
                    ul.classList="add-student-from-course add-to-class"
                    ul.appendChild(li1)
                    li1.appendChild(img1)

                    var td1_text = document.createTextNode(i+1);
                    var td2_text = document.createTextNode(student_array[i].username);
                    var td3_text = document.createTextNode(student_array[i].fullName);         // Create a text node
                    var td4_text = document.createTextNode(student_array[i].email);
                    
                    td1.appendChild(td1_text);
                    td2.appendChild(td2_text);
                    td3.appendChild(td3_text);
                    td4.appendChild(td4_text);
                    td5.appendChild(ul);
                    tr.appendChild(td1)
                    tr.appendChild(td2)
                    tr.appendChild(td3)
                    td4.className="user-email"
                    tr.appendChild(td4)
                    tr.appendChild(td5)
                    
                    document.getElementById("list").appendChild(tr);     
                }

                
                $(".add-to-class").click(function(){
                    if($(this).hasClass("delete-student-from-course")){
                        $(this).parent().parent().css("background","#fff")
                        $(this).addClass("add-student-from-course")
                        $(this).removeClass("delete-student-from-course")
                        $(this).children().children().attr("src","images/add-student-toClass.svg")
                        let user_email=$(this).parent().parent().children(".user-email").text()
                        console.log(user_email)
                        for(let i=0;i<studentlist_lenght;i++){
                            if(student_array[i].email==user_email){
                                for(let j=0;j<stid_n;j++){
                                    if(student_array[i].id==studentIds_array[j]){
                                        studentIds_array.splice(j, 1);
                                        stid_n--
                                        break
                                    }
                                }
                                break
                                
                                
                            }
                        }

                    }
                    else if($(this).hasClass("add-student-from-course")){
                        $(this).parent().parent().css("background"," rgba(62, 81, 150, 0.05)")
                        $(this).addClass("delete-student-from-course")
                        $(this).removeClass("add-student-from-course")
                        $(this).children().children().attr("src","images/delete-icon.svg")
                        let user_email=$(this).parent().parent().children(".user-email").text()
                        console.log(user_email)
                        for(let i=0;i<studentlist_lenght;i++){
                            if(student_array[i].email==user_email){
                                studentIds_array[stid_n]=student_array[i].id
                                stid_n++
                                break
                            }
                        }

                    }
                    
                    
                })
                
                
            
            }
            console.log(studentIds_array)  
            $(".save-course-info").click(function(){
                document.getElementById("message").style.color = "#d24d57"
                let teacher_name=document.querySelector('#teachers').value
                let course_name=document.querySelector('#course-name').value
                let teacherID
                if(teacher_name=="???????????? ????????"){
                    teacher_name=undefined
                }
                for(let i=0;i<u;i++){
                    if(teacher_array[i].fullName==teacher_name){
                        teacherID=teacher_array[i].id
                        console.log(teacherID)
                    }
                }
                let course={
                    studentIds: studentIds_array,
                    name: course_name,
                    profId : teacherID
                }
                console.log(course)
                axios.post('http://localhost:3000/api/v1/course/create',course,{
                    headers: {
                        'Authorization' : `Bearer ${localStorage.toggled}`
                    }
                })
                .then(res =>{
                    console.log('post : ')
                    console.log(res.data.message);
                    let ms=res.data.message
                    if(ms=="???? ???????????? ?????????? ????"){
                        
                        document.getElementById("message").style.color = "#16a085";
                        
                        window.location.href = "manager-panel-courselist.html";
                        
                    }
                    
                    document.querySelector('#message').innerHTML=ms;
                })
                .catch(err => console.log(err))

                console.log(studentIds_array)
                console.log(teacher_name)
            })
            
        })
        .catch(err => console.log(err))
        
        

        })
        .catch(err => console.log(err))



    })   
    .catch(err => console.log(err))

            



            
            
                
})