(function ($) {
  "use strict";
  var myTheme = window.myTheme || {},
    $win = $(window);
  myTheme.Isotope = function () {
    // 4 column layout
    var isotopeContainer = $(".isotopeContainer");
    if (!isotopeContainer.length || !jQuery().isotope) return;
    $win.on("load", function () {
      isotopeContainer.isotope({
        itemSelector: ".isotopeSelector",
        isOriginLeft: false,
      });
      $(".isotopeFilters").on("click", "a", function (e) {
        $(".isotopeFilters").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        var filterValue = $(this).attr("data-filter");
        isotopeContainer.isotope({ filter: filterValue });
        e.preventDefault();
      });
    });

    // 3 column layout
    var isotopeContainer2 = $(".isotopeContainer2");
    if (!isotopeContainer2.length || !jQuery().isotope) return;
    $win.on("load", function () {
      isotopeContainer2.isotope({
        itemSelector: ".isotopeSelector",
        isOriginLeft: false,
      });
      $(".isotopeFilters2").on("click", "a", function (e) {
        $(".isotopeFilters2").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        var filterValue = $(this).attr("data-filter");
        isotopeContainer2.isotope({ filter: filterValue });
        e.preventDefault();
      });
    });

    // 2 column layout
    var isotopeContainer3 = $(".isotopeContainer3");
    if (!isotopeContainer3.length || !jQuery().isotope) return;
    $win.on("load", function () {
      isotopeContainer3.isotope({
        itemSelector: ".isotopeSelector",
        isOriginLeft: false,
      });
      $(".isotopeFilters3").on("click", "a", function (e) {
        $(".isotopeFilters3").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        var filterValue = $(this).attr("data-filter");
        isotopeContainer3.isotope({ filter: filterValue });
        e.preventDefault();
      });
    });

    // 1 column layout
    var isotopeContainer4 = $(".isotopeContainer4");
    if (!isotopeContainer4.length || !jQuery().isotope) return;
    $win.on("load", function () {
      isotopeContainer4.isotope({
        itemSelector: ".isotopeSelector",
        isOriginLeft: false,
      });
      $(".isotopeFilters4").on("click", "a", function (e) {
        $(".isotopeFilters4").find(".active").removeClass("active");
        $(this).parent().addClass("active");
        var filterValue = $(this).attr("data-filter");
        isotopeContainer4.isotope({ filter: filterValue });
        e.preventDefault();
      });
    });
  };
  myTheme.Isotope();
  /*
        isotope js end
     */
  $(".collapse-block-title").on("click", function (e) {
    e.preventDefault;
    var speed = 300;
    var thisItem = $(this).parent(),
      nextLevel = $(this).next(".collection-collapse-block-content");
    if (thisItem.hasClass("open")) {
      thisItem.removeClass("open");
      nextLevel.slideUp(speed);
    } else {
      thisItem.addClass("open");
      nextLevel.slideDown(speed);
    }
  });
})(jQuery);
/*************************
 portfolio js start
 *************************/
