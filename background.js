var done = false;
var playerCounter = 0;
var tierPicker = function(skill) {
    var tierClass = "";
    var tier = skill/3;

    if (tier <= 1) {
        tierClass = "tierOne";
    } else if (tier <= 2) {
        tierClass = "tierTwo";
    } else if (tier <= 3) {
        tierClass = "tierThree";
    } else if (tier <= 4) {
        tierClass = "tierFour";
    } else {
        tierClass = "godTier";
    }

    return tierClass;
}

while (!done) {
    var playerSkillId = "#player_td_skill_" + playerCounter;
    var skillSpan = $(playerSkillId + " span");
    if (skillSpan.length === 0) {
        done = true;
    } else {
        var skillTotal = Number.parseInt(skillSpan.attr("title"));
        var tierClass = tierPicker(skillTotal);
        skillSpan.html(skillTotal);
        skillSpan.addClass("disbarredSkillSpan " + tierClass);
        $(playerSkillId).addClass("disbarred");
        playerCounter++;
    }
}