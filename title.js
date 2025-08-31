document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });

function loaded() {
    setInterval(loop, 400);
}

var x = 0;

var titleText = [
    "~ ",
    "~ b",
    "~ br",
    "~ bra",
    "~ brad",
    "~ brade",
    "~ braden",
    "~ braden@",
    "~ braden@h",
    "~ braden@ho",
    "~ braden@hom",
    "~ braden@home",
    "~ braden@home",
    "~ braden@home",
    "~ braden@home",
    "~ braden@home",
    "~ braden@hom",
    "~ braden@ho",
    "~ braden@h",
    "~ braden@",
    "~ braden",
    "~ brade",
    "~ brad",
    "~ bra",
    "~ br",
    "~ b",
    "~ ",
    ];

function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}