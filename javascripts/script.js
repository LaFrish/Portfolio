
jQuery(document).ready(function($) {
    $(window).load(function() {
        $(".loader").delay(500).fadeOut(1000, function() {
            $(".load_page").fadeOut(1000)
        })
    })
});
jQuery(document).ready(function($) {
    $("#tagline").hide();
    $(window).load(function() {
        $("#tagline").delay(1800).fadeIn(1500)
    })
});

//jQuery(document).ready(function($) {
  //  var open = false;

    //function resizeMenu() {
      //  if ($(this).width() <= 680) {
        //    $("nav,#logo").hide();
          //  $("#nav-mobile,#menu-button").show()
        //} else {
          //  if ($(this).width() >= 680) {
            //    $("nav,#logo").show();
              //  $("#nav-mobile,#menu-button").hide()
            //}
        //}
    //}

    //function setupMenuButton() {
      //  $("#menu-button").click(function(e) {
        //    e.preventDefault();
          //  if (open) {
            //    $("nav").slideUp()
            //} else {
              //  $("nav").slideDown()
            //}
            //open = !open
        //})
    //}
    //$(window).resize(resizeMenu);
    //resizeMenu();
    //setupMenuButton()
//});

$(".image_container_zoom").toggle(function() {
    $(this).animate({
        width: "90%"
    })
}, function() {
    $(this).animate({
        width: "70%"
    })
});
$(document).ready(function() {
    $(".category,.level,.proficiency").hide();
    $(".tool-item").hover(function() {
        $(".skill_hud", this).stop(true, true).delay(200).animate({
            height: "100px"
        }, {
            duration: 400
        });
        $(".category", this).stop(true, true).delay(200).fadeIn(400);
        $(".level", this).stop(true, true).delay(200).fadeIn(400);
        $(".proficiency", this).stop(true, true).delay(200).fadeIn(400)
    }, function() {
        $(".skill_hud").stop(true, true).animate({
            height: "60px"
        }, {
            duration: 400
        });
        $(".category", this).stop(true, true).fadeOut(100);
        $(".level", this).stop(true, true).fadeOut(100);
        $(".proficiency", this).stop(true, true).fadeOut(100)
    })
});
jQuery(document).ready(function($) {
    $(window).load(function() {
        $(".loader").delay(500).fadeOut(1000, function() {
            $(".load_page").fadeOut(1000)
        })
    })
});

function isMobile() {
  return ((navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/webOS/i)) || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) || (navigator.userAgent.match(/BlackBerry/)))
}

function tagline() {
  scrollPos = jQuery(this).scrollTop();
  $("#tagline").css({
    "margin-top": -(scrollPos / 3) + "px",
    opacity: 1 - (scrollPos / 550)
  })
}
$(document).ready(function() {
  if (!isMobile()) {
    jQuery(window).scroll(function() {
      tagline()
    })
  }
});
$(document).ready(function() {
  $("#name-contact,#email-contact,#message-contact").val("")
});

function IsChar(name) {
  var regex = /^([A-Za-z][ éàëA-Za-z]*)$/;
  return regex.test(name)
}

function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email)
}
$(document).ready(function() {
  $("#error-wrap,#success-wrap,#error,#success").hide();
  $("#send-email").click(function() {
    var name = $("#name-contact").val();
    var email = $("#email-contact").val();
    var message = $("#message-contact").val();
    var errors = new Array();
    var i = -1;
    if (!IsChar(name) || ($.trim(name).length == 0)) {
      i++;
      errors[i] = " ";
      $("#name-contact").animate({
        outlineColor: "#5c6576"
      }, "slow");
      $("#error-wrap").stop(true, true).delay(200).animate({
        height: "50px",
        mode: "show"
      }, {
        duration: 400
      });
      $("#error").delay(500).fadeIn(700)
    }
    if (!IsEmail(email)) {
      i++;
      errors[i] = " ";
      $("#email-contact").animate({
        outlineColor: "#5c6576"
      }, "slow");
      $("#error-wrap").stop(true, true).delay(200).animate({
        height: "50px",
        mode: "show"
      }, {
        duration: 400
      });
      $("#error").delay(500).fadeIn(700)
    }
    if ($.trim(message).length == 0) {
      i++;
      errors[i] = " ";
      $("#message-contact").animate({
        outlineColor: "#5c6576"
      }, "slow");
      $("#error-wrap").stop(true, true).delay(200).animate({
        height: "50px",
        mode: "show"
      }, {
        duration: 400
      });
      $("#error").delay(500).fadeIn(700)
    }
    if (errors.length == 0) {
      $.ajax({
        url: "envoi.php",
        data: {
          name: name,
          email: email,
          message: message
        },
        type: "POST",
        success: function(data) {
          $("#success-wrap").stop(true, true).delay(200).animate({
            height: "50px",
            mode: "show"
          }, {
            duration: 400
          });
          $("#success").delay(500).fadeIn(700);
          $("#error-wrap").stop(true, true).delay(100).animate({
            height: "50px",
            mode: "hide"
          }, {
            duration: 200
          });
          $("#error").delay(100).fadeOut(200);
          $("#name-contact,#email-contact,#message-contact").delay(1000).val("");
          $("#name-contact,#email-contact,#message-contact").animate({
            outlineColor: "transparent"
          })
        }
      })
    }
  })
});

//end
$(document).ready(function(){
  $('.bxslider').bxSlider({
    adaptiveHeight: true,
    auto: true,
    mode: 'fade'
  });
});

$(function() {                       //run when the DOM is ready
  $(".nav-bar").click(function() {  //use a class, since your ID gets mangled
    $("header").toggleClass("close");      //add the class to the clicked element
  });
});

$(document).ready(function() {
  $(".tabs-menu a").click(function(event) {
    event.preventDefault();
    $(this).parent().addClass("current");
    $(this).parent().siblings().removeClass("current");
    var tab = $(this).attr("href");
    $(".tab-content").not(tab).css("display", "none");
    $(tab).fadeIn(1200);
  });
});

$(function() {
  $('nav a').bind('click',function(event){
    var $anchor = $(this);
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top-80
    }, 1500,'easeInOutExpo');

    event.preventDefault();
  });
  $('.welcome a').bind('click',function(event){
    var $anchor = $(this);
    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500,'easeInOutExpo');

    event.preventDefault();
  });
});
$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
    menu = target;
    $target = $(target);

  });
});
function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('nav a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('nav a').removeClass("active");
      currLink.addClass("active");
    }
    else{
      currLink.removeClass("active");
    }
  });
}

window.onscroll = function() {
  startGif()};

function startGif() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("headerimg").className = "test";
    } else {
        document.getElementById("headerimg").className = "";
    }
};
startGif()

//portfolio gallery
$(document).ready(function(){

   var $sm = 480;
   var $md = 768;

   function resizeThis() {
      $imgH = $('.middle img').width();
      if ($(window).width() >= $sm) {
         $('.left,.right,.section').css('height', $imgH);
      } else {
         $('.left,.right,.section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('.section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });

   $('.btn-primary').click(function(){
      alert('I lied');
   });
});

// gallery

$(document).ready(function(){
  $('#app-pictureinfo1').click(function(e){
    e.stopPropagation();
    $('#app-picturedet1').fadeToggle('fast');
  });
  var $ap2 = 0;
  $('#app-pictureinfo2').click(function(e){
    e.stopPropagation();
    if ( $ap2 === 0 ) { // checks to see if the picture has been moved sideways
      $('#app-picture2').animate({'left':'-245px'}).addClass('move2');
      $ap2 = $ap2 + 1;
    } else { // if picture was already moved, move it back
      $('#app-picture2').animate({'left':'0px'}).removeClass('move2');
      $ap2 = 0;
    }
    $('#app-picturedet2').fadeToggle('fast'); // happens regardless of picture moving
  });
  var $ap3 = 0;
  $('#app-pictureinfo3').click(function(e){
    e.stopPropagation();
    if ( $ap3 === 0 ) {
      $('#app-picture3').animate({'left':'-491px'}).addClass('move3');
      $ap3 = $ap3 + 1;
    } else {
      $('#app-picture3').animate({'left':'0px'}).removeClass('move3');
    }
    $('#app-picturedet3').fadeToggle('fast');
  });
  var $ap4 = 0;
  $('#app-pictureinfo4').click(function(e){
    e.stopPropagation();
    if ( $ap4 === 0 ) { // checks to see if the picture has been moved sideways
      $('#app-picture4').animate({'left':'-737px'}).addClass('move4');
      $ap4 = $ap4 + 1;
    } else { // if picture was already moved, move it back
      $('#app-picture4').animate({'left':'0px'}).removeClass('move4');
      $ap4 = 0;
    }
    $('#app-picturedet4').fadeToggle('fast');
  });
  $(document).click(function(){
    $ap2 = 0; // have to reset variables so animation resets
    $ap3 = 0;
    $ap4 = 0;
    $('#app-picturedet1:visible').fadeToggle('fast');
    $('#app-picturedet2:visible').fadeToggle('fast');
    $('.move2').animate({'left':'+=246px'}).removeClass('move2');
    $('#app-picturedet3:visible').fadeToggle('fast');
    $('.move3').animate({'left':'+=492px'}).removeClass('move3');
    $('#app-picturedet4:visible').fadeToggle('fast');
    $('.move4').animate({'left':'+=738px'}).removeClass('move4');
  });
});
