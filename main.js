$(window).load(function () {
    $("#loader").fadeIn("fast").delay(1000).fadeOut("fast").delay(1000);
    $("#main").hide(0).delay(1000).css({display: 'block'}).animate({opacity :'1'}, 800);
    $("body").particleground({
        density: 15000
    });
});

function showMain(){
    $(".slide").fadeOut("fast").animate({opacity : '0'}, 100).css("z-index", 0);
    $("#main").fadeIn("fast").animate({opacity : '1'}, 300).css("z-index", 201);
}

function showAbout() {
    $(".slide").fadeOut("fast").animate({opacity : '0'}, 100).css("z-index", 0);
    $("#about").fadeIn("fast").animate({opacity : '1'}, 300).css("z-index", 199);
};

function showTeam() {
    $(".slide").fadeOut("fast").animate({opacity : '0'}, 100).css("z-index", 0);
    $("#team").fadeIn("fast").animate({opacity : '1'}, 300).css("z-index", 199);
};

function showContact() {
    $(".slide").fadeOut("fast").animate({opacity : '0'}, 100).css("z-index", 0);
    $("#contact").fadeIn("fast").animate({opacity : '1'}, 300);
};

function showForm() {
    $(".slide").fadeOut("fast").animate({opacity : '0'}, 100);
    $("#apply").fadeIn("fast").animate({opacity : '1'}, 300).css("z-index", 199);
    if(!window.ConversationalForm){
        window.ConversationalForm = new cf.ConversationalForm({
            formEl: document.getElementById("conversational"),
            context: document.getElementById("apply-form"),
            submitCallback: function() {
                $(".submit").click()
            },
            userImage: "none"
        });
    }
};

function thankYou() {
    $(".slide").fadeOut("fast").animate({opacity : '0'}, 100).css("z-index", 0);
    $("#thanks").fadeIn("fast").animate({opacity : '1'}, 300);
}