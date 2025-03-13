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

// jQuery is required to run this code
if ($(window).width() > 1024) {
  $(document).ready(function() {
    scaleVideoContainer();

    initBannerVideoSize(".video-container .poster img");
    initBannerVideoSize(".video-container .filter");
    initBannerVideoSize(".video-container video");

    $(window).on("resize", function() {
      scaleVideoContainer();
      scaleBannerVideoSize(".video-container .poster img");
      scaleBannerVideoSize(".video-container .filter");
      scaleBannerVideoSize(".video-container video");
    });
  });

  function scaleVideoContainer() {
    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + "px";
    $(".homepage-hero-module").css("height", unitHeight);
  }

  function initBannerVideoSize(element) {
    $(element).each(function() {
      $(this).data("height", $(this).height());
      $(this).data("width", $(this).width());
    });

    scaleBannerVideoSize(element);
  }

  function scaleBannerVideoSize(element) {
    var windowWidth = $(window).width(),
      windowHeight = $(window).height() + 5,
      videoWidth,
      videoHeight;

    // console.log(windowHeight);

    $(element).each(function() {
      var videoAspectRatio = $(this).data("height") / $(this).data("width");

      $(this).width(windowWidth);

      if (windowWidth < 1000) {
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({
          "margin-top": 0,
          "margin-left": -(videoWidth - windowWidth) / 2 + "px"
        });

        $(this)
          .width(videoWidth)
          .height(videoHeight);
      }

      $(".homepage-hero-module .video-container video").addClass(
        "fadeIn animated"
      );
    });
  }
}


}
/*
     FILE ARCHIVED ON 22:03:27 Apr 07, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:18:04 Mar 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.692
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 15.833
  LoadShardBlock: 199.862 (3)
  PetaboxLoader3.datanode: 326.018 (5)
  PetaboxLoader3.resolve: 156.818 (2)
  load_resource: 319.576
  loaddict: 57.432
*/