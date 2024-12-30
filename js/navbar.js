(function ($) {
  $(document).ready(function () {
    $(".mobile-toggle").click(function () {
      $(this).toggleClass("menu-open");
      $("ul").toggleClass("active");

      // Use toggleClass for overflow to avoid redundancy
      $("body").toggleClass("no-overflow", $(this).hasClass("menu-open"));
    });
  });
})(jQuery);
