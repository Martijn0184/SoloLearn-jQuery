$(function () {
    var txt = "";
    txt += "width: " + $("div").width() + " ";
    txt += "height: " + $("div").height() + "<br/>";
    txt += "innerWidth: " + $("div").innerWidth() + " ";
    txt += "innerHeight: " + $("div").innerHeight() + "<br/>";
    txt += "outerWidth: " + $("div").outerWidth() + " ";
    txt += "outerHeight: " + $("div").outerHeight();

    $("div").html(txt);
});

