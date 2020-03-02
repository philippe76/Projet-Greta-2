

// ------------- ANIMATION MENU BURGER ------------- //

$(function() {
  $("#burger").click(function() {
    $("#nav_title").toggle();
    $("#nav_menu")
      .toggle()
      .css({ position: "relative", "z-index": 20 });
    $("#burger").toggle();
    $("#nav_logo").css({
      top: -15,
      left: 220
    });
  });

  $("#cross").click(function() {
    $("#nav_menu")
      .toggle()
    $("#nav_title").toggle();
    $("#burger").toggle();
    $("#nav_logo").css({
      top: -25,
      left: 120
    });
  });
});


