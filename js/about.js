

$(function() {

    $("#about button").click(function() {
      $("#article1").toggle();
      $("#article2").fadeToggle();
    });

    $("#about_cross").click(function() {
      $("#article2").toggle();
      $('#about_modal').toggle();
      $("#article1").fadeToggle();
    });
  });
  