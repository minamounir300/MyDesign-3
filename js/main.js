$(function() {

    $(window).scroll(function() {

        var navbar = $(".navbar");
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass("navbar-scrolled");
        } else {
            navbar.removeClass("navbar-scrolled");
        };
    });

    // Deal with Tabs
    $(".tab-switch li").click(function() {
        // Add Selected Class to Active Li & hiding from others
        $(this).addClass("selected").siblings().removeClass("selected");

        // Hide All Divs
        $(".tabs .tabs-content > div").hide();

        // Show Div Connected
        $("." + $(this).data("class")).show();

    });
});