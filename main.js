$(window).load(function () {
    $("#loader").fadeIn("slow").delay(1000).fadeOut("slow").delay(1000);
    $("#main").hide(0).delay(1000).css({display: 'block'}).animate({opacity :'1'}, 800);
    $("body").particleground({
        density: 15000
    });
});

function showMain(){
    $(".slide").fadeOut("slow").animate({opacity : '0'}, 100);
    $("#main").fadeIn("slow").animate({opacity : '1'}, 300);
}

function showAbout() {
    $(".slide").fadeOut("slow").animate({opacity : '0'}, 100);
    $("#about").fadeIn("slow").animate({opacity : '1'}, 300);
};

function showTeam() {
    $(".slide").fadeOut("slow").animate({opacity : '0'}, 100);
    $("#team").fadeIn("slow").animate({opacity : '1'}, 300);
};

function showContact() {
    $(".slide").fadeOut("slow").animate({opacity : '0'}, 100);
    $("#contact").fadeIn("slow").animate({opacity : '1'}, 300);
};

function showForm() {
    $(".slide").fadeOut("slow").animate({opacity : '0'}, 100);
    $("#apply").fadeIn("slow").animate({opacity : '1'}, 300);
};

function thankYou() {
    $(".slide").fadeOut("slow").animate({opacity : '0'}, 100);
    $("#thanks").fadeIn("slow").animate({opacity : '1'}, 300);
}