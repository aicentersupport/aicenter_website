var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

if ($(window).width() > 1024) {
  var myFullpage = new fullpage("#fullpage", {
    sectionsColor: ["#fff", "#fff"],
    navigation: true,
    showActiveTooltip: false,
    menu: "#menu",
    anchors: ["home", "about", "careers", "solutions", "contact-us"]
  });
}

$("#product-slider .carousel-item img, .serv-img img, .mainframe img").each(
  function() {
    var $src = $(this).attr("src");
    var $color = $(this).attr("data-color");
    $(this)
      .parent()
      .css({
        "background-image": "url(" + $src + ")",
        "background-color": $color
      });
    $(this).remove();
  }
);

var btn = $("#button");

$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function(e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// navigation

$(document).ready(function() {
  $(".navbar-nav  li a").click(function() {
    $(".navbar-nav li a").removeClass("active");
    $(this).addClass("active");
  });
});

if ($(window).width() < 1024) {
  $(document).ready(function() {
    $(".navbar-nav  li, .dropdown-menu .dropdown-item").click(function() {
      if (!$(this).hasClass("dropdown")) {
        $(".navbar-collapse").removeClass("show");
      } else {
      }
    });
  });
}
// readmore text

$(document).ready(function() {
  // Configure/customize these variables.
  var showChar = 120; // How many characters are shown by default
  var moretext = "Show More";
  var lesstext = "Show Less";

  $(".more").each(function() {
    var content = $(this).html();

    if (content.length > showChar) {
      var c = content.substr(0, showChar);
      var h = content.substr(showChar, content.length - showChar);

      var html =
        c +
        '&nbsp;</span><span class="morecontent"><span>' +
        h +
        '</span>&nbsp;&nbsp;<a href="" class="morelink">' +
        moretext +
        "</a></span>";

      $(this).html(html);
    }
  });

  $(".morelink").click(function() {
    if ($(this).hasClass("less")) {
      $(this).removeClass("less");
      $(this).html(moretext);
    } else {
      $(this).addClass("less");
      $(this).html(lesstext);
    }
    $(this)
      .parent()
      .prev()
      .toggle();
    $(this)
      .prev()
      .toggle();
    return false;
  });
});


}
/*
     FILE ARCHIVED ON 22:04:16 Apr 07, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:18:04 Mar 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.686
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.012
  esindex: 0.013
  cdx.remote: 42.57
  LoadShardBlock: 429.768 (3)
  PetaboxLoader3.resolve: 303.201 (3)
  PetaboxLoader3.datanode: 248.612 (5)
  load_resource: 146.555
  loaddict: 57.28
*/