"use strict";

$(document).ready(function () {
  var result = JSON.parse(localStorage.toggled);
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
    $('#quiz-title2').text(res.data.data.title); // $('#quiz-title3').text(res.data.data.title)

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
    var minandsec = result.remainingTime.split(":");
    var allmin = parseInt(minandsec[0]) * 60 + parseInt(minandsec[1]);
    var TIME_LIMIT = allmin;
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
    var examsheet = res.data.data; // var questionIds=examsheet.quesOrder
    // console.log(questionIds)
    // for(var i=0;i<questionIds.length;i++){

    axios.get('http://localhost:3000/api/v1/question/getByExId/' + result.examId, {
      headers: {
        'Authorization': "Bearer ".concat(localStorage.toggled)
      }
    }).then(function (res) {
      console.log(res.data.data);
      var questions = res.data.data;
      var c = 1;

      for (var i = 0; i < questions.length; i++) {
        var i2 = i + 1;
        var divquestionbox = document.createElement("div");
        var ul1 = document.createElement("ul"); // var ul2=document.createElement("ul");

        var ul1_li1 = document.createElement("li");
        var ul1_li2 = document.createElement("li");
        var ul1_li3 = document.createElement("li");
        var textarea = document.createElement("textarea");
        var saveBtn = document.createElement("input");
        textarea.className = "answer-textarea";
        textarea.id = "answer-textarea" + i2;
        textarea.placeholder = "پاسخ خود را اینجا تایپ کنید";
        divquestionbox.className = "question-box";
        ul1_li1.className = "question-number";
        ul1_li2.className = "question-face";
        ul1_li3.className = "question-score";
        saveBtn.className = "save-btn";
        saveBtn.id = "save-btn" + i2;
        saveBtn.value = "ذخیره پاسخ";
        saveBtn.type = "button"; // ul2.className="q-options"

        var ul1_li1_text = document.createTextNode(i + 1);
        var ul1_li2_text = document.createTextNode(questions[i].ques.face);
        var ul1_li3_text = document.createTextNode(questions[i].Score);
        ul1_li1.appendChild(ul1_li1_text);
        ul1_li2.appendChild(ul1_li2_text);
        ul1_li3.appendChild(ul1_li3_text);
        ul1.appendChild(ul1_li1);
        ul1.appendChild(ul1_li2);
        ul1.appendChild(ul1_li3);
        divquestionbox.appendChild(ul1);
        divquestionbox.appendChild(textarea);
        divquestionbox.appendChild(saveBtn);
        $(".question-boxs-father").append(divquestionbox);
        $("#save-btn" + c).click(function () {
          var opID = $(this).attr('id');
          opID = opID.substr(8);
          var textarea_value = $('#answer-textarea' + opID).val();
          var answersheet = {
            questionId: questions[opID - 1].id,
            // ResponseTest:opID[1],
            ResponseDesc: textarea_value,
            examId: result.examId
          };
          console.log(answersheet);
          axios.put('http://localhost:3000/api/v1/examSheet/update', answersheet, {
            headers: {
              'Authorization': "Bearer ".concat(localStorage.toggled)
            }
          }).then(function (res) {
            console.log(res.data);
            alert(res.data.message);
          })["catch"](function (err) {
            return console.log(err);
          });
        });
        c++;
      } // // console.log("question : "+question)

    })["catch"](function (err) {
      return console.log(err);
    }); // }
  })["catch"](function (err) {
    return console.log(err);
  });
  $("#end-quiz-btn").click(function () {
    var link = "http://localhost:3000/api/v1/examsheet/finish/" + result.examId;
    axios.put(link, {
      headers: {
        "Authorization": "Bearer ".concat(localStorage.toggled)
      }
    }).then(function (res) {
      console.log(res.data);
      window.location.href = "student-panel-myquiz.html";
    })["catch"](function (err) {
      return console.log(err);
    });
  });
});