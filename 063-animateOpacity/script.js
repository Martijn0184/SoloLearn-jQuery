$(function () {
    $("div").click(function () {
        $("div").animate({
            opacity: 0.5,
            height: '+=100px'
        }, 1000);
    });
});


