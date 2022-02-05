$(window).ready(function () {
    $("#loadingSpinner").fadeOut(1000);
  
    $(".fade-element-up").each(function (i) {
      const top_of_object = $(this).offset().top;
      const bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it */
      if (bottom_of_window > top_of_object) {
        $(this).addClass("reveal-up");
      } else {
        // reveal-up object reaches the in view port
        $(window).scroll(function () {
          $(".fade-element-up").each(function (i) {
            const top_of_object = $(this).offset().top;
            const bottom_of_window = $(window).scrollTop() + $(window).height();
  
            if (bottom_of_window > top_of_object) {
              $(this).addClass("reveal-up");
            } else {
              $(this).removeClass("reveal-up");
            }
          });
        });
      }
    });
    $(".home-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".home").offset().top
      }, 800);
      classAdd(".home-btn");
      classRemove(".about-btn");
      classRemove(".portfolio-btn");
      classRemove(".contact-btn");
      const top_of_object = $(".home").offset().top;
      console.log(top_of_object)
    });
  
    $(".about-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".about-me").scrollTop()+600
      }, 800);
      classAdd(".about-btn");
      classRemove(".home-btn");
      classRemove(".portfolio-btn");
      classRemove(".contact-btn");
      const top_of_object = $(".about-me").offset().top;
      console.log(top_of_object)
    });
  
    $(".portfolio-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".portfolio-me").scrollTop()+1500
      }, 800);
      classAdd(".portfolio-btn");
      classRemove(".home-btn");
      classRemove(".about-btn");
      classRemove(".contact-btn");
      const top_of_object = $(".portfolio-me").offset().top;
      console.log(top_of_object)
    });
  
    $(".contact-btn").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact-me").offset().top
      }, 800);
      classAdd(".contact-btn");
      classRemove(".home-btn");
      classRemove(".portfolio-btn");
      classRemove(".about-btn");
      const top_of_object = $(".contact-me").offset().top;
      console.log(top_of_object)
    });
  
    function classAdd(vars) {
      let classess = $(vars).addClass('active');
      return classess;
    }
  
    function classRemove(vars) {
      let classess = $(vars).removeClass('active')
    }
  });
  