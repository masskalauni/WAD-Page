
// // main faq's section
// $(".panel-heading a").click(function () {
//   $(".panel-default").removeClass("panel-active");
//   if (!$(this).closest(".panel").find(".panel-collapse").hasClass("in"))
//     $(this).parents(".panel-default").addClass("panel-active");
// });
//    // Common FAQ
//    $(".accordion-title").click(function (e) {
//     var accordionitem = $(this).attr("data-tab");
//     $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();

//     $(this).toggleClass("active-title");
//     $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");

//     $("i.fa-chevron-down", this).toggleClass("chevron-top");
//     $("#" + accordionitem).parent().siblings().find(".accordion-title i.fa-chevron-down").removeClass("chevron-top");
// });
// $('#goog-gt-tt .top').remove();


  // Main FAQ's section
$(".panel-heading a").click(function () {
    $(".panel-default").removeClass("panel-active");
    var panel = $(this).closest(".panel-default");
    if (!panel.find(".panel-collapse").hasClass("in")) {
      panel.addClass("panel-active");
    }
  });
  
  // Common FAQ
  $(".accordion-title").click(function (e) {
    var accordionItem = $(this).attr("data-tab");
    $("#" + accordionItem).slideToggle().parent().siblings().find(".accordion-content").slideUp();
  
    $(this).toggleClass("active-title");
    $("#" + accordionItem).parent().siblings().find(".accordion-title").removeClass("active-title");
  
    var icon = $("i.fa-chevron-down", this);
    icon.toggleClass("chevron-top", $(this).hasClass("active-title"));
  });
  
  // Remove the element with class 'top' from the element with ID 'goog-gt-tt'
  $('#goog-gt-tt .top').remove();
  
  
  
  


// <!-- Tech stack Start -->

$('#techstack_tab[data-mouse="hover"] .nav-link').hover(function (e) {
    $('#techstack_tabContent .tab-pane').removeClass('active');
    var target = $(this).attr('data-target');
    $(target).addClass('active');
    $('#techstack_tab .nav-link').removeClass('active');
    $(this).addClass('active');
});

$('.tech_bxnw').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    focusOnSelect: true,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
// Tech stack End 



// all slider slick start


if ($(window).width() <= 1200) {
    $('.wbdvplrs_indstrs_sc .resulv_dub_ul').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 3,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.wbdvlprs_rsns_sc .tab-content').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 2,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.wbdvplrs_prcs_sc .iotprcs_lst').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 3,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.wbdvpmnt_srvs_sldr').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 3,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
if ($(window).width() <= 992) {
    $('.wbdvplre_chs_sc .fntch_chs_lst').slick({
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 3,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
$('#hovr_tab .nav-link').hover(function (e) {
    var target = $(this).attr('data-target');
    $("#hovr_tabContent .tab-pane, #hovr_tab .nav-link").removeClass('active');
    $(target).addClass('active');
    $(this).addClass('active');
});

$(document).ready(function () {
    $(".counter").each(function () {
        var count = $(this);
        var countTo = count.attr('data-count');
        // console.log(countTo);
        $({ countNum: 0 }).animate({
            countNum: countTo,
        },
            {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    count.text(Math.floor(this.countNum));
                },
                complete: function () {
                    count.text(this.countNum);
                }
            });
    });
});
