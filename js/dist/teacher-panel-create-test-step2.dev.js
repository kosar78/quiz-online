"use strict";

$(document).ready(function () {
  $(".delete-from-list").click(function () {
    $("#deleteFile").modal("hide");
  });
  $(".not-delete").click(function () {
    $("#deleteFile").modal("hide");
  });
  $(".delete-test").click(function () {
    $("#deleteFile").modal("toggle");
  });
  $("select").change(function () {
    var str = "";
    $("select option:selected").each(function () {
      str = $(this).text();

      if (str == "فایل جواب") {
        console.log(str);
        $(".file-date-div").removeClass("display-none");
        $(".file-date-div").addClass("display-block");
        $(".file-showtime-div").removeClass("display-block");
        $(".file-showtime-div").addClass("display-none");
      } else if (str == "فایل سوال") {
        console.log(str);
        $(".file-date-div").addClass("display-none");
        $(".file-date-div").removeClass("display-block");
        $(".file-showtime-div").addClass("display-block");
        $(".file-showtime-div").removeClass("display-none");
      } else if (str == "انتخاب کنید") {
        $(".file-date-div").addClass("display-none");
        $(".file-date-div").removeClass("display-block");
        $(".file-showtime-div").removeClass("display-block");
        $(".file-showtime-div").addClass("display-none");
      }
    });
  });
  $("#file-date-access").pDatepicker();
  $(".upload-file-icon").click(function () {
    $("#fileInp").trigger('click');
  });
  $(".uploading .file-name").click(function () {
    $("#fileInp").trigger('click');
  });
  $("#fileInp").on("change", function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        var file = input.files[0];
        $(".file-name").html(file.name);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }
});