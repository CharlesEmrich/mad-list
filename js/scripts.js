$(document).ready(function() {
  $("#formOne").submit(function (event) {
    var name = $("#name").val();
    var friend = $("#hater").val();
    $(".name").append(name);
    $(".person2").append(friend);
    event.preventDefault();
    $("#letter").removeClass();
    $("#letter").addClass("show");
  });

});
