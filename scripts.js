$(document).ready(function () {
    $(window).scroll(function () {
        // Makes the navbar "appear and reappear",change color
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
    });
    // toggle menu button when mobile layout
    $('.menu-toggler').click(function () {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });
});