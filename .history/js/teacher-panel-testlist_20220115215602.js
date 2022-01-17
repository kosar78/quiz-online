$(document).ready(function(){
    axios.get('http://localhost:3000/api/v1/exam/listForProf',{

        headers: {
            'Authorization' : `Bearer ${localStorage.toggled}`
        }
        
    })
    .then(res =>{
        console.log('get : ')
        
        var teacherTestsArray=res.data.data
        if(teacherTestsArray.lenght==0){
                    document.getElementById("empty-list").innerHTML = "لیست آزمون ها خالی است";
                }
                else{
                    console.log(res.data.data);
                    for(let i=0;i<teacherTestsArray.lenght;i=i+1){
                        var tr = document.createElement("tr");
                        var td1 = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        var td4 = document.createElement("td");
                        var td5 = document.createElement("td");

                        var ul=document.createElement("ul");
                        var li1=document.createElement("li");
                        var li2=document.createElement("li");
                        var img1=document.createElement("img");
                        var img2=document.createElement("img");
                        // var a=document.createElement("a");

                        // td4.className=""
                        ul.className="edit-delete";
                        img1.className="delete-test"
                        img2.className="edit-test"
                        img1.src="images/delete-icon.svg"
                        img2.src="images/edit-icon.svg"
                        // a.href="manager-panel-addteacher.html"

                        ul.appendChild(li1)
                        ul.appendChild(li2)
                        li1.appendChild(img1)
                        li2.appendChild(img2)
                        // a.appendChild(img2)

                        var td1_text = document.createTextNode(i+1);
                        var td2_text = document.createTextNode(teacherTestsArray[i].title);
                        if(teacherTestsArray[i].testordesc==false){
                            var td3_text = document.createTextNode("تستی");
                        }
                        else{
                            var td3_text = document.createTextNode("تشریحی");
                        }
                                 // Create a text node
                        // var td4_text = document.createTextNode(teacherTestsArray[i].email);
                        
                        td1.appendChild(td1_text);
                        td2.appendChild(td2_text);
                        td3.appendChild(td3_text);
                        // td4.appendChild(td4_text);
                        td5.appendChild(ul);
                        tr.appendChild(td1)
                        tr.appendChild(td2)
                        tr.appendChild(td3)
                        tr.appendChild(td4)
                        tr.appendChild(td5)
                        
                        document.getElementById("list").appendChild(tr);     
                    }
                    
                }
        
    })
    .catch(err => console.log(err))
})