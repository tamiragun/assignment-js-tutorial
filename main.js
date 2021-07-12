//File to handle other JS outside of the code editor

//Open the respective page when clicking on one of the buttons
$(document).ready(function () {
  $("#basics").click(function () {
    window.open("/basic-syntax.html", "_self");
  });
  $("#jquery").click(function () {
    window.open("/jquery.html", "_self");
  });
  $("#events").click(function () {
    window.open("/events.html", "_self");
  });
  $("#home").click(function () {
    window.open("/index.html", "_self");
  });
});
