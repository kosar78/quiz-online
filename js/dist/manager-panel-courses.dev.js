"use strict";

$(document).ready(function () {
  axios.get('http://localhost:3000/api/v1/user/my', {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
    console.log('get : ');
    document.getElementById("fullname").innerHTML = res.data.data.fullName;
    var uni_id = res.data.data.uniId;
    axios.get('http://localhost:3000/api/v1/user/list', {
      headers: {
        'Authorization': "Bearer ".concat(localStorage.toggled)
      }
    }).then(function (res) {
      console.log('get : ');
      var user_array = res.data.data;
      var j = 0;
      var u = 0;
      var teacher_array = [];
      var student_array = [];
      var studentIds_array = [];
      var stid_n = 0;

      for (var i = 0; i < user_array.length; i++) {
        if (user_array[i].role == "student" && user_array[i].deleted == false) {
          student_array[j] = user_array[i];
          j = j + 1;
        } else if (user_array[i].role == "teacher" && user_array[i].deleted == false) {
          teacher_array[u] = user_array[i];
          u = u + 1;
        }
      }

      var studentlist_lenght = j;

      for (var _i = 0; _i < u; _i++) {
        var option = document.createElement("option");
        var option_text = document.createTextNode(teacher_array[_i].fullName);
        option.appendChild(option_text);
        document.getElementById("teachers").appendChild(option);
      } // console.log(userlist_lenght)


      if (studentlist_lenght == 0) {
        document.getElementById("empty-list").innerHTML = "لیست  دانشجویان  خالی است";
      } else {
        for (var _i2 = 0; _i2 < studentlist_lenght; _i2 = _i2 + 1) {
          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");
          var td3 = document.createElement("td");
          var td4 = document.createElement("td");
          var td5 = document.createElement("td");
          var ul = document.createElement("ul");
          var li1 = document.createElement("li");
          var img1 = document.createElement("img"); // ul.classList="add-to-class";

          img1.src = "images/add-student-toClass.svg";
          ul.classList = "add-student-from-course add-to-class";
          ul.appendChild(li1);
          li1.appendChild(img1);
          var td1_text = document.createTextNode(_i2 + 1);
          var td2_text = document.createTextNode(student_array[_i2].username);
          var td3_text = document.createTextNode(student_array[_i2].fullName); // Create a text node

          var td4_text = document.createTextNode(student_array[_i2].email);
          td1.appendChild(td1_text);
          td2.appendChild(td2_text);
          td3.appendChild(td3_text);
          td4.appendChild(td4_text);
          td5.appendChild(ul);
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          td4.className = "user-email";
          tr.appendChild(td4);
          tr.appendChild(td5);
          document.getElementById("list").appendChild(tr);
        }

        $(".add-to-class").click(function () {
          if ($(this).hasClass("delete-student-from-course")) {
            $(this).parent().parent().css("background", "#fff");
            $(this).addClass("add-student-from-course");
            $(this).removeClass("delete-student-from-course");
            $(this).children().children().attr("src", "images/add-student-toClass.svg");
            var user_email = $(this).parent().parent().children(".user-email").text();
            console.log(user_email);

            for (var _i3 = 0; _i3 < studentlist_lenght; _i3++) {
              if (student_array[_i3].email == user_email) {
                for (var _j = 0; _j < stid_n; _j++) {
                  if (student_array[_i3].id == studentIds_array[_j]) {
                    studentIds_array.splice(_j, 1);
                    stid_n--;
                    break;
                  }
                }

                break;
              }
            }
          } else if ($(this).hasClass("add-student-from-course")) {
            $(this).parent().parent().css("background", " rgba(62, 81, 150, 0.05)");
            $(this).addClass("delete-student-from-course");
            $(this).removeClass("add-student-from-course");
            $(this).children().children().attr("src", "images/delete-icon.svg");

            var _user_email = $(this).parent().parent().children(".user-email").text();

            console.log(_user_email);

            for (var _i4 = 0; _i4 < studentlist_lenght; _i4++) {
              if (student_array[_i4].email == _user_email) {
                studentIds_array[stid_n] = student_array[_i4].id;
                stid_n++;
                break;
              }
            }
          }
        });
      }

      console.log(studentIds_array);
      $(".save-course-info").click(function () {
        document.getElementById("message").style.color = "#d24d57";
        var teacher_name = document.querySelector('#teachers').value;
        var course_name = document.querySelector('#course-name').value;
        var teacherID;

        if (teacher_name == "انتخاب کنید") {
          teacher_name = undefined;
        }

        for (var _i5 = 0; _i5 < u; _i5++) {
          if (teacher_array[_i5].fullName == teacher_name) {
            teacherID = teacher_array[_i5].id;
            console.log(teacherID);
          }
        }

        var course = {
          studentIds: studentIds_array,
          name: course_name,
          profId: teacherID
        };
        console.log(course);
        axios.post('http://localhost:3000/api/v1/course/create', course, {
          headers: {
            'Authorization': "Bearer ".concat(localStorage.toggled)
          }
        }).then(function (res) {
          console.log('post : ');
          console.log(res.data.message);
          var ms = res.data.message;

          if (ms == "با موفقیت ایجاد شد") {
            document.getElementById("message").style.color = "#16a085";
            window.location.href = "manager-panel-courselist.html";
          }

          document.querySelector('#message').innerHTML = ms;
        })["catch"](function (err) {
          return console.log(err);
        });
        console.log(studentIds_array);
        console.log(teacher_name);
      });
    })["catch"](function (err) {
      return console.log(err);
    });
  })["catch"](function (err) {
    return console.log(err);
  });
});