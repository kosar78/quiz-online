$(document).ready(function(){
    $(".add-new-option-btn").click(function(){
        $("<input class='option-input' type='text' placeholder='گزینه 3'>").insertBefore( ".add-new-option-btn" );
        var option=document.createElement("li");
        

        ul.className="edit-delete";
        img1.className="delete-student"
        img2.className="edit-student"
        img1.src="images/delete-icon.svg"
        img2.src="images/edit-icon.svg"
        // a.href="manager-panel-addStudent.html"

        ul.appendChild(li1)
        ul.appendChild(li2)
    })
    $(".uploading-pic-q").click(function(){
        $(".uploading-pic-q").addClass("choosen-type-q")
        $(".typing-text-q").removeClass("choosen-type-q")
    })

    $(".typing-text-q").click(function(){
        $(".uploading-pic-q").removeClass("choosen-type-q")
        $(".typing-text-q").addClass("choosen-type-q")
    })
})