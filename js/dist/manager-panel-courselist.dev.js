"use strict";

$(document).ready(function () {
  axios.get('http://localhost:3000/api/v1/user/my', {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
    console.log('get : ');
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    axios.get('http://localhost:3000/api/v1/course/list', {
      headers: {
        'Authorization': "Bearer ".concat(localStorage.toggled)
      }
    }).then(function (res) {
      console.log('get : ');
      var course_array = res.data.data;

      if (course_array.length == 0) {
        document.getElementById("empty-list").innerHTML = "لیست  دروس  خالی است";
      } else {
        axios.get('http://localhost:3000/api/v1/user/list', {
          headers: {
            'Authorization': "Bearer ".concat(localStorage.toggled)
          }
        }).then(function (res) {
          console.log('get : ');
          var user_array = res.data.data;

          var _loop = function _loop(d) {
            // let course_students_id=course_array[d].studentIds;
            // let student_array=[]
            var course_teacher_id = course_array[d].profId;
            var teacher_fullName = "";
            var k = 0;

            for (var i = 0; i < user_array.length; i++) {
              // if(user_array[i].role=="student"){
              //     student_array[j]=user_array[i]
              //     j=j+1
              // }
              // else 
              if (user_array[i].role == "teacher" && user_array[i].id == course_teacher_id) {
                teacher_fullName = user_array[i].fullName;
              }
            } // console.log()
            // for(let c=0;c<j;c++){
            //     for(let b=0;b<course_students_id.length;b++){
            //         if(student_array[c].id==course_students_id[b]){
            //             course_students_array=student_array[c]
            //         }
            //     }
            // }
            // console.log(course_students_id)
            // $("#student-table tbody tr").remove()


            tr = document.createElement("tr");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            td4 = document.createElement("td");
            td5 = document.createElement("td");
            ul = document.createElement("ul");
            li1 = document.createElement("li");
            li2 = document.createElement("li");
            img1 = document.createElement("img");
            img2 = document.createElement("img");
            a = document.createElement("a");
            p = document.createElement("p");
            p.className = "course-student-btn";
            td2.className = "course-title-td";
            td3.className = "teacher-course-title-td";
            ul.className = "edit-delete";
            img1.className = "delete-course";
            img2.className = "edit-course";
            img1.src = "images/delete-icon.svg";
            img2.src = "images/edit-icon.svg";
            a.href = "manager-panel-addCourse.html";
            ul.appendChild(li1);
            ul.appendChild(li2);
            li1.appendChild(img1);
            li2.appendChild(a);
            a.appendChild(img2);
            td4.appendChild(p);
            td1_text = document.createTextNode(d + 1);
            td2_text = document.createTextNode(course_array[d].name);
            td3_text = document.createTextNode(teacher_fullName);
            td4_text = document.createTextNode("دانشجویان");
            td1.appendChild(td1_text);
            td2.appendChild(td2_text);
            td3.appendChild(td3_text);
            p.appendChild(td4_text);
            td5.appendChild(ul);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            document.getElementById("list").appendChild(tr);
            $(".course-student-btn").click(function () {
              $("#student-table tbody tr").remove();
              document.getElementById("empty-list-student").innerHTML = "";
              var courseName = $(this).parent().parent().children(".course-title-td").text();

              for (var j = 0; j < course_array.length; j++) {
                var studentIds_array = [];
                $("#student-table tbody tr").remove();

                if (course_array[j].name == courseName) {
                  studentIds_array = course_array[j].studentIds;

                  if (studentIds_array.length == 0) {
                    document.getElementById("empty-list-student").innerHTML = "لیست  دانشجویان  خالی است";
                  } else {
                    $("#student-table tbody tr").remove();

                    var _loop2 = function _loop2(_a) {
                      axios.get('http://localhost:3000/api/v1/user/getUserById/' + studentIds_array[_a], {
                        headers: {
                          'Authorization': "Bearer ".concat(localStorage.toggled)
                        }
                      }).then(function (res) {
                        var student = res.data.data;
                        var tr_s = document.createElement("tr");
                        var td1_s = document.createElement("td");
                        var td2_s = document.createElement("td");
                        var td3_s = document.createElement("td");
                        var td4_s = document.createElement("td");
                        var td1_text_s = document.createTextNode(_a + 1);
                        var td2_text_s = document.createTextNode(student.fullName);
                        var td3_text_s = document.createTextNode(student.username);
                        var td4_text_S = document.createTextNode(student.email);
                        td1_s.appendChild(td1_text_s);
                        td2_s.appendChild(td2_text_s);
                        td3_s.appendChild(td3_text_s);
                        td4_s.appendChild(td4_text_S);
                        tr_s.appendChild(td1_s);
                        tr_s.appendChild(td2_s);
                        tr_s.appendChild(td3_s);
                        tr_s.appendChild(td4_s);
                        document.getElementById("list-student").appendChild(tr_s);
                      })["catch"](function (err) {
                        return console.log(err);
                      });
                    };

                    for (var _a = 0; _a < studentIds_array.length; _a++) {
                      _loop2(_a);
                    } // $("#student-table tbody tr").remove()


                    break;
                  }
                }
              }

              $("#students-course-list").modal("toggle");
              console.log(k); // k=0
            });
            $(".delete-from-list").click(function () {
              $("#deleteCourse").modal("hide");
            });
            $(".not-delete").click(function () {
              $("#deleteCourse").modal("hide");
            });
            $(".delete-course").click(function () {
              $("#deleteCourse").modal("show");
            });
            $(".close-list").click(function () {
              $("#students-course-list").modal("toggle");
            });
          };

          for (var d = 0; course_array.length; d++) {
            var tr;
            var td1;
            var td2;
            var td3;
            var td4;
            var td5;
            var ul;
            var li1;
            var li2;
            var img1;
            var img2;
            var a;
            var p;
            var td1_text;
            var td2_text;
            var td3_text;
            var td4_text;

            _loop(d);
          }
        })["catch"](function (err) {
          return console.log(err);
        });
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  })["catch"](function (err) {
    return console.log(err);
  });
});