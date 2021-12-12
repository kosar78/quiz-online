"use strict";

var localStorage_Array = localStorage.toggled.split("|");
localStorage.toggled = localStorage_Array[0];
var userId = localStorage_Array[1];
var pass = "";

axios.get('http://localhost:3000/api/v1/user/my', {
  headers: {
    'Authorization': "Bearer ".concat(localStorage_Array[0])
  }
}).then(function (res) {
  console.log('get data : ');
  console.log(res.data);
  console.log(res.data.data.username);
  let fullname = res.data.data.fullName;
  let fullName_split = fullname.split(' ')
  document.querySelector('#username').value = res.data.data.username;
  document.querySelector('#first-name').value = fullName_split[0];
  document.querySelector('#last-name').value = fullName_split[fullName_split.length -1 ];
  document.querySelector('#email').value = res.data.data.email;
  document.querySelector('#university-name').value = res.data.uni
  console.log(res.data.data.profilePic.url);

 

  let save = document.querySelector('#save-profile-info')
  save.addEventListener('click', function () {
      let img = document.querySelector('#profile_img').src;
      console.log('img');
      console.log(img);
      var firstName = document.querySelector('#first-name').value;
      var lastName = document.querySelector('#last-name').value;
      var username = document.querySelector('#username').value;
      var email = document.querySelector('#email').value;
      var user = {};

        user = {
            // profilePic : img,
            fullName: firstName + " " + lastName,
            username: username,
            email: email,
        };

  axios.put('http://localhost:3000/api/v1/user/updateMyUser', user, {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
        console.log('res');
        console.log(res);
        console.log('update : ');
        console.log(res.data.message);
        var ms = res.data.message;

        if (ms == "کاربر با موفقیت ویرایش شد") {
        document.getElementById("message").style.color = "#16a085";
        window.location.href = "manager-panel-teacherlist.html";
        }

        document.querySelector('#message').innerHTML = ms;
        })["catch"](function (err) {
            return console.log(err);
        });
    });
    })["catch"](function (err) {
    return console.log(err);
});