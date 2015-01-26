var done = false;
var playerCounter = 0;
while (!done) {
    var skillSpan = $("#player_td_skill_" + playerCounter + " span");
    if (skillSpan.length === 0) {
        done = true;
    } else {
        var skillTotal = Number.parseInt(skillSpan.attr("title"));
        skillSpan.html(skillTotal);
        playerCounter++;
    }
}