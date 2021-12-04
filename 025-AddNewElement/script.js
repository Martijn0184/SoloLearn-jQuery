$(function () {
    let grt = $("<p></p>").text("Hey");
    $("#demo").before(grt);
    let txt = $("<p></p>").text("Hi");
    $("#demo").after(txt);
});

