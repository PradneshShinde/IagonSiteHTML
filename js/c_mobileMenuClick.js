function nav_navigateToIco() {


    var elmnt = document.getElementById("ico");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
    $('#nav_liICO').addClass(' selected');
    $('#nav_livision').removeClass('selected');
    $('#nav_lihow').removeClass(' selected');
    $('#nav_limap').removeClass(' selected');
    $('#nav_liteam').removeClass(' selected');

    $('#navbar-collapse').removeClass(' in show');

}
function nav_navigateToVision() {

    var elmnt = document.getElementById("_Vision");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
    $('#nav_liICO').removeClass('selected');
    $('#nav_livision').addClass(' selected');
    $('#nav_lihow').removeClass(' selected');
    $('#navlimap').removeClass(' selected');
    $('#nav_liteam').removeClass(' selected');

    $('#navbar-collapse').removeClass(' in show');
}
function nav_navigateToHow() {

    var elmnt = document.getElementById("mHowItWorks");
    elmnt.scrollIntoView({
        behavior: 'smooth', block: "start"
    });

    $('#nav_liICO').removeClass(' selected');
    $('#nav_livision').removeClass(' selected');
    $('#nav_lihow').addClass('selected');
    $('#nav_limap').removeClass(' selected');
    $('#nav_liteam').removeClass(' selected');

    $('#navbar-collapse').removeClass(' in show');
}
function nav_navigateToRoad() {

    var elmnt = document.getElementById("_RoadMap");
    elmnt.scrollIntoView({
        behavior: 'smooth', block: "start"
    });

    $('#nav_liICO').removeClass(' selected');
    $('#nav_livision').removeClass(' selected');
    $('#nav_lihow').removeClass(' selected');
    $('#nav_limap').addClass(' selected');
    $('#nav_liteam').removeClass(' selected');

    $('#navbar-collapse').removeClass(' in show');
}
function nav_navigateToTeam() {

    var elmnt = document.getElementById("_Team");
    elmnt.scrollIntoView({
        behavior: 'smooth', block: "start"
    });

    $('#nav_liICO').removeClass(' selected');
    $('#nav_livision').removeClass(' selected');
    $('#nav_lihow').removeClass(' selected');
    $('#nav_limap').removeClass(' selected');
    $('#nav_liteam').addClass(' selected');

    $('#navbar-collapse').removeClass(' in show');
}

