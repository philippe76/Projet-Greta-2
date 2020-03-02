


const diapos = ['blog/blog-voyage.jpg', 'blog/blog-voyage1.jpg', 'blog/blog-voyage2.jpg', 'blog/blog-voyage3.jpg', 'blog/blog-voyage4.jpg', 'blog/blog-voyage5.jpg', 'blog/blog-voyage6.jpg', 'blog/blog-voyage7.jpg', 'blog/blog-voyage8.jpg', 'blog/blog-voyage9.jpg', 'blog/blog-voyage10.jpg', 'blog/blog-voyage11.jpg']



$(function(){ 

  let i = 0;
  let timer;

  function slider(){
    $('.slide').attr({src: diapos[i]});

    if (i <= diapos.length-1){
      i++;
    }
    else {
      i=0;
    }
    timer = setTimeout(slider, 2000);

  }

  $('.fa-pause-circle ').click(function(){
    clearInterval(timer)
  })

  $('.fa-play-circle').click(function(){
    slider();
  })

  slider();




    $('#type button').click(function(){

      let type = $(this).data('type');

        $('#story div').each(function(){

          if($(this).hasClass('active')){
            $(this).toggle().removeClass('active');
            }

          if ($(this).data('type')===type){
            $(this).toggle().addClass('active');
          }

        });

        $('#type button').each(function(){

          if($(this).hasClass('active')){
            $(this).removeClass('active');
            }

          if ($(this).data('type')===type){
            $(this).addClass('active');
          }

        });

      $('#story').scrollTop(0);  

    });



    $('.full_screen').click(function(){

      $('#cartes, #user, #exp_blog').css({position: 'relative', opacity: 0.2});

      $('#story_modal').toggle().css({ position: 'absolute', top: 4500, left: '20%'}).html($(this).parent().html());
 
      $('.full_screen, .amazing_cross').toggle();
        
    })

  $('#story_modal').click(function(){
    $('.full_screen, .amazing_cross').toggle();
    $('#story_modal').toggle()
    $('#cartes, #user, #exp_blog').css({ position: "static", opacity: 1});;
  })  



  $('#share').click(function(event){
    // event.preventDefault();
    if ($(':text#pseudo').val() != '' && $(':text#blog_name').val() != '' ){
      alert(`thanks ${$(':text#pseudo').val()} for sharing your story from ${$(':text#blog_name').val()} !`);
    }
  })


  
  
});
    


