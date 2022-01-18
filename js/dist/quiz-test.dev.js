"use strict";

$(document).ready(function () {
  // let localStorage_Array=localStorage.toggled.split("|")
  // console.log(localStorage_Array)
  // localStorage.toggled=localStorage_Array[0]
  // let result=localStorage_Array[1]
  // console.log(result.studentId)
  var result = JSON.parse(localStorage.toggled); // var result=localStorage.toggled

  localStorage.toggled = result.token;
  console.log(localStorage.toggled);
  axios.get('http://localhost:3000/api/v1/user/getUserById/' + result.studentId, {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
    console.log(res.data);
    $('#student-name').text(res.data.data.fullName);
  })["catch"](function (err) {
    return console.log(err);
  });
  axios.get('http://localhost:3000/api/v1/exam/getById/' + result.examId, {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
    console.log(res.data);
    $('#quiz-title1').text(res.data.data.title);
    $('#quiz-title2').text(res.data.data.title);
    $('#quiz-title3').text(res.data.data.title);
    $('#quiz-time').text(res.data.data.quizTime + " دقیقه");
    $('#quiz-q-number').text(res.data.data.numfQuestion);
    var FULL_DASH_ARRAY = 283;
    var WARNING_THRESHOLD = 10;
    var ALERT_THRESHOLD = 5;
    var COLOR_CODES = {
      info: {
        color: "green"
      },
      warning: {
        color: "orange",
        threshold: WARNING_THRESHOLD
      },
      alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
      }
    };
    var TIME_LIMIT = res.data.data.quizTime * 60;
    var timePassed = 0;
    var timeLeft = TIME_LIMIT;
    var timerInterval = null;
    var remainingPathColor = COLOR_CODES.info.color;
    document.getElementById("app").innerHTML = "\n        <div class=\"base-timer\">\n        <svg class=\"base-timer__svg\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\">\n            <g class=\"base-timer__circle\">\n            <circle class=\"base-timer__path-elapsed\" cx=\"50\" cy=\"50\" r=\"45\"></circle>\n            <path\n                id=\"base-timer-path-remaining\"\n                stroke-dasharray=\"283\"\n                class=\"base-timer__path-remaining ".concat(remainingPathColor, "\"\n                d=\"\n                M 50, 50\n                m -45, 0\n                a 45,45 0 1,0 90,0\n                a 45,45 0 1,0 -90,0\n                \"\n            ></path>\n            </g>\n        </svg>\n        <span id=\"base-timer-label\" class=\"base-timer__label\">").concat(formatTime(timeLeft), "</span>\n        </div>\n        ");
    startTimer();

    function onTimesUp() {
      clearInterval(timerInterval);
    }

    function startTimer() {
      timerInterval = setInterval(function () {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
        document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
        setCircleDasharray();
        setRemainingPathColor(timeLeft);

        if (timeLeft === 0) {
          onTimesUp();
        }
      }, 1000);
    }

    function formatTime(time) {
      var minutes = Math.floor(time / 60);
      var seconds = time % 60;

      if (seconds < 10) {
        seconds = "0".concat(seconds);
      }

      return "".concat(minutes, ":").concat(seconds);
    }

    function setRemainingPathColor(timeLeft) {
      var alert = COLOR_CODES.alert,
          warning = COLOR_CODES.warning,
          info = COLOR_CODES.info;

      if (timeLeft <= alert.threshold) {
        document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
        document.getElementById("base-timer-path-remaining").classList.add(alert.color);
      } else if (timeLeft <= warning.threshold) {
        document.getElementById("base-timer-path-remaining").classList.remove(info.color);
        document.getElementById("base-timer-path-remaining").classList.add(warning.color);
      }
    }

    function calculateTimeFraction() {
      var rawTimeFraction = timeLeft / TIME_LIMIT;
      return rawTimeFraction - 1 / TIME_LIMIT * (1 - rawTimeFraction);
    }

    function setCircleDasharray() {
      var circleDasharray = "".concat((calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0), " 283");
      document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharray", circleDasharray);
    }
  })["catch"](function (err) {
    return console.log(err);
  });
  axios.get('http://localhost:3000/api/v1/examSheet/get/' + result.examId + "/" + result.studentId, {
    headers: {
      'Authorization': "Bearer ".concat(localStorage.toggled)
    }
  }).then(function (res) {
    console.log(res.data);
  })["catch"](function (err) {
    return console.log(err);
  });
});