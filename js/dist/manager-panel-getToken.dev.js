"use strict";

axios.get('http://localhost:3000/api/v1/user/my', {
  headers: {
    'Authorization': "Bearer ".concat(localStorage.toggled)
  }
}).then(function (res) {
  console.log('get : ');
  console.log(res.data.data.fullName);
  document.getElementById("fullname").innerHTML = res.data.data.fullName;
})["catch"](function (err) {
  return console.log(err);
});