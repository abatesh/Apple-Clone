
// $(".listDown").on("click" ,colle);

// function colle(){

//     $(".listDown").next().slideToggle();
    
//     let isExpanded = false;
//     let classList = $('.listDown').attr('class').split(/\s+/);
//     $.each(classList, function(index, item) {
//         if (item === 'expanded') {
//             isExpanded = true;
//         }
//     });

//     if(isExpanded){
//         $(".listDown").removeClass("expanded");
//     }else{
//         $(".listDown").addClass("expanded");
//     }

// }


// $("h3").on("click", slideDownList);

// function slideDownList() {
//     $(this).toggleClass("expanded");
// let content = $(this).next();
//     if (content.is(":visible")) {
//         content.hide();
//     } else {
//         content.show();
//     }
//     } 

    $(window).on("resize", function () {
        // console.log($(window).width());
        if ($(window).width() < 768) {
          console.log($(window).width(), "every time screen size changes");
      
          $(".footer-links-wrapper").addClass("evan");
        } else {
          $(".footer-links-wrapper").removeClass("evan");
        }
      });
      
      if ($(window).width() < 768) {
        console.log($(window).width(), "first time only");
        $(".footer-links-wrapper").addClass("evan");
      } else {
        $(".footer-links-wrapper").removeClass("evan");
      }
      // window.location.reload();
      
      // $(".evan h3").on("click", fun5);
      $(document).on("click", ".evan h3", function () {
        $(this).next("ul").slideToggle();
        $(this).toggleClass("expanded");
      });
      