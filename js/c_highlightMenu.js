
function scroll_navigateToIco() {


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
function scroll_navigateToVision() {
    

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
function scroll_navigateToHow() {


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
function scroll_navigateToRoad() {



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


function scroll_navigateToTeam() {



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

