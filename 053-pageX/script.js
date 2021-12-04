$(function () {
    $("a").click(function (event) {
        alert(event.pageX);
        //alerts the mouse position
        event.preventDefault();
        //prevents following the link
    });
});




