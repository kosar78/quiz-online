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

            var divquizbox=document.createElement("div");
            var divhead=document.createElement("div");
            var ul1=document.createElement("ul");
            var ul2=document.createElement("ul");
            var ul3=document.createElement("ul");
            var ul4=document.createElement("ul");
            var ul5=document.createElement("ul");
            var ul6=document.createElement("ul");
            var ul1_li1=document.createElement("li");
            var ul1_li2=document.createElement("li");
            var ul2_li1=document.createElement("li");
            var ul2_li2=document.createElement("li");
            var ul3_li1=document.createElement("li");
            var ul3_li2=document.createElement("li");
            var ul4_li1=document.createElement("li");
            var ul4_li2=document.createElement("li");
            var ul5_li1=document.createElement("li");
            var ul5_li2=document.createElement("li");
            var ul6_li1=document.createElement("li");
            var ul6_li2=document.createElement("li");
            
            var divquizbox=document.createElement("div");
        }
        
    })
    .catch(err => console.log(err))
})