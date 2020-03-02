//  ---- IMPLEMENTATION DES VIGNETTES AVEC CLASSES, PHOTOS ET TITRES ------- //

const continent = {
  Asia: ["Malaysia", "India", "China", "Japan", "Maldives", "Iran"],
  Africa: ["Zanzibar", "Morocco", "Egypt", "Mali", "Cameroon", "Tanzania"],
  Europe: [
    "Finland",
    "Russia",
    "Portugal",
    "Spain",
    "Turkey",
    "England"
  ],
  "North-America": ["Canada", "United-States", "Mexico"],
  "central-America": ["Guatemala", "Panama", "Nicaragua", "Cuba"],
  "South-America": [
    "Brazil",
    "Chile",
    "Argentina",
    "Colombia",
    "Peru",
    "Bolivia"
  ]
};

$(function() {

  $.each(continent, function(key, value) {
    $(value).each(function(index) {
      let article = $("<article/>");
      article.css("background-image", `url('img/${value[index]}.jpg')`);
      article.addClass(`${key} zoom`);

      $(".vignette").append(article);
      let h1 = $("<h1>").text(`${value[index]}`);
      article.append(h1);

      if (index % 2 === 0) {
        // classe 'off' un article sur deux
        article.addClass("off");
      }
    });
  });


  


// ------------- TABLEAU VIGNETTES POUR AFFICHAGE MOBILE ------------- //


  let off = [];
  
  $('article').each(function(){
      if($(this).attr('display','block') && !$(this).hasClass('off') ){
        off.push(this)
      }
    })

    
  if ($( window ).width() < 800){

    $(off).each(function(index){
      if (index % 2 === 0){
        $(this).css('display', 'none');
      }
    })

  }


// ------------- ANIMATION MENU FILTRANT ------------- //


  $("#menu_central button").click(function() {
    $(this).css("border", "1px solid white");

    $("#page_centrale article").fadeOut(600);

    $(`[class*="${$(this).attr("class")}"]`).fadeIn().toggle;

    if ($(this).text() === "All") {

      if ($( window ).width() < 800){
        $(off).each(function(index){
          if (index % 2 != 0){
            $(this).fadeIn();
          }
        })
      }
      else{
        $("#page_centrale article").fadeIn();
        $('[class$="off"').fadeOut(600);
      }
    }

    //  ---- DISPARITION BORDURE BOUTON APRES PERTE FOCUS ------- //

    $(this).mouseout(function() {
      $(this).css("border", "none");
    });
  });


//  ---- BOUTON RETOUR HAUT DE PAGE ------- //

  $("#top").click(function() {
    window.scrollTo(0, 0);
  });

  $('#nav_menu a').click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    console.log(target);
    $('html, body').animate({scrollTop: $(target).offset().top}, 1500)
  })


});