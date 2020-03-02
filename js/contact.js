$(function() {
  $("#submit").click(function() {
    if (!$.isNumeric($(':input[type="tel"]').val())) {
      event.preventDefault(); // obligé de le mettre ici pour que le commentaire reste affiché mais sans annuler l'effet du 'required' ....
      $(':input[type="tel"]')
        .val("Merci de saisir un numéro de téléphone")
        .css("color", "red");
    }
  });

  //$("#form div").click(function() {
  //  $(".calque").toggleClass("opacity");
  //  $(".calque").css({ opacity: 0 });
  //});

  /*
  $("#form").mouseover(function() {
    $(this).css({
      border: "3px solid white",
      "border-radius": 5
    });
    $("#form h2").toggle();
  });

  $("#form").mouseout(function() {
    $(this).css({ border: "none", "background-color": "transparent" });
    $("#form h2").toggle();
  });

  $("#map").mouseover(function() {
    $(this).css({
      border: "3px solid white",
      "border-radius": 5,
      padding: "0 30px"
    });
    $("#map h2").toggle();
  });

  $("#map").mouseout(function() {
    $(this).css({ border: "none", "background-color": "transparent" });
    $("#map h2").toggle();
  });*/
});
