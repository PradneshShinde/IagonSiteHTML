
function navigateToIco() {


    var elmnt = document.getElementById("ico");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
    $('#menuVision').removeClass(' selected');
    $('#menuICO').addClass('selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").attr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").removeAttr("type", "disc");


}
function navigateToVision() {
    
    var elmnt = document.getElementById("vision");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });
    $('#menuVision').addClass('selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").attr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").removeAttr("type", "disc");

}
function navigateToHow() {

    var elmnt = document.getElementById("howitworks");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });

    $('#menuVision').removeClass(' selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').addClass('selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").attr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").removeAttr("type", "disc");


}
function navigateToRoad() {

    var elmnt = document.getElementById("_RoadMap");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });

    $('#menuVision').removeClass(' selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').addClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").attr("type", "disc");
    $("#liteam").removeAttr("type", "disc");



}
function navigateToTeam() {

    var elmnt = document.getElementById("_Team");
    elmnt.scrollIntoView({
        behavior: 'smooth'
    });

    $('#menuVision').removeClass(' selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').addClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").attr("type", "disc");

}

