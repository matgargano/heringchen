$(function () {
    var SetCarouselHeight = function () {
        $("#myCarousel .item > img").height(function () {
            return $("#myCarousel").width() * 0.5;
        });
    }

    SetCarouselHeight();
    $(window).resize(function () {
        SetCarouselHeight();
    });
});