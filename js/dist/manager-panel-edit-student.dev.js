"use strict";

var localStorage_Array2 = localStorage.toggled.split("|");
localStorage.toggled = localStorage_Array2[0];
var studentId = localStorage_Array2[1];
var pass2 = "";
axios.get('http://localhost:3000/api/v1/user/my', {
  headers: {
    'Authorization': "Bearer ".concat(localStorage_Array2[0])
  }
}).then(function (res) {
  console.log('get : ');
  console.log(res.data.data.fullName);
  document.getElementById("fullname").innerHTML = res.data.data.fullName;
  var save = document.querySelector('#save-student-info');
  console.log(localStorage_Array2);
  axios.get('http://localhost:3000/api/v1/user/getUserById/' + studentId, {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
    console.log(res.data);
    var Fullname = res.data.data.fullName.split(" ");
    var LastName_sum = "";

    for (var i = 1; i < Fullname.length; i++) {
      if (i < Fullname.length - 1) {
        LastName_sum = LastName_sum + Fullname[i] + " ";
      } else {
        LastName_sum = LastName_sum + Fullname[i];
      }
    }

    document.querySelector('#firstname').value = Fullname[0];
    document.querySelector('#lastname').value = LastName_sum;
    document.querySelector('#username').value = res.data.data.username;
    document.querySelector('#email').value = res.data.data.email;
    pass2 = res.data.data.password;
    console.log(pass2);
  })["catch"](function (err) {
    return console.log(err);
  });
  var uni_id = res.data.data.uniId;
  save.addEventListener('click', function () {
    document.getElementById("message").style.color = "#d24d57";
    var firstName = document.querySelector('#firstname').value;
    var lastName = document.querySelector('#lastname').value;
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;
    var email = document.querySelector('#email').value;
    var admin = {};

    if (password == "") {
      console.log(pass2);
      admin = {
        id: studentId,
        fullName: firstName + " " + lastName,
        password: pass2,
        username: username,
        email: email
      };
    } else {
      console.log(password);
      admin = {
        id: studentId,
        fullName: firstName + " " + lastName,
        password: password,
        username: username,
        email: email
      };
    }

    axios.post('http://localhost:3000/api/v1/user/updateUser', admin, {
      headers: {
        'Authorization': "Bearer ".concat(localStorage.toggled)
      }
    }).then(function (res) {
      console.log('update : ');
      console.log(res.data.message);
      var ms = res.data.message;

      if (ms == "کاربر با موفقیت ویرایش شد") {
        document.getElementById("message").style.color = "#16a085";
        window.location.href = "manager-panel-studentlist.html";
      }

      document.querySelector('#message').innerHTML = ms;
    })["catch"](function (err) {
      return console.log(err);
    });
  });
})["catch"](function (err) {
  return console.log(err);
});