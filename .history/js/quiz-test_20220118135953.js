    

$(document).ready(function(){
    let localStorage_Array=localStorage.toggled.split("|")
    localStorage.toggled=localStorage_Array[0]
    let examId=Number(localStorage_Array[1])
})