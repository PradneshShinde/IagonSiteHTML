
//ICO Starts
var waypointIcoDown = new Waypoint({
  element: document.getElementById('_ICO'),
  handler: function (direction) {

    if (direction == 'down') {

      $('#menuVision').removeClass(' selected');
      $('#menuICO').addClass('selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').removeClass(' selected');

    }
  },
  offset: 0
})

var waypointIcoUp = new Waypoint({
  element: document.getElementById('_ICO'),
  handler: function (direction) {

    if (direction == 'up') {

      $('#menuVision').removeClass(' selected');
      $('#menuICO').addClass('selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').removeClass(' selected');

    
    }
  },
  offset: 0
})
//ICO Ends

//Vision Starts
var waypointVisionDown = new Waypoint({
  element: document.getElementById('_Vision'),
  handler: function (direction) {

    if (direction == 'down') {
      $('#menuVision').addClass('selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').removeClass(' selected');

    
    }

  },
  offset: '30%'
})

var waypointVisionUp = new Waypoint({
  element: document.getElementById('_Vision'),
  handler: function (direction) {

    if (direction == 'up') {
      $('#menuVision').addClass('selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').removeClass(' selected');

     
    }

  },
  offset: -20
})
//Vision Ends

//_HowItWorks Start
var waypointHowItWorksDown = new Waypoint({
  element: document.getElementById('_HowItWorks'),
  handler: function (direction) {

    if (direction == 'down') {
      $('#menuVision').removeClass(' selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').addClass('selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').removeClass(' selected');

     
    }
  },
  offset: '30%'
 
})

var waypointHowItWorksUp = new Waypoint({
  element: document.getElementById('_HowItWorks'),
  handler: function (direction) {

    if (direction == 'up') {
      $('#menuVision').removeClass(' selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').addClass('selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').removeClass(' selected');

    
    }
  },
  // offset: '10%'
  offset: -20
})

//_HowItWorks Ends

//RoadMap Start
var waypointRoadMapDown = new Waypoint({
  element: document.getElementById('_RoadMap'),
  handler: function (direction) {

    if (direction == 'down') {
      $('#menuVision').removeClass(' selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').addClass(' selected');
      $('#menuTeam').removeClass(' selected');

    
    }
  },
  offset: '40%'
})

var waypointRoadMapUp = new Waypoint({
  element: document.getElementById('_RoadMap'),
  handler: function (direction) {

    if (direction == 'up') {
      $('#menuVision').removeClass(' selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').addClass(' selected');
      $('#menuTeam').removeClass(' selected');

     
    }
  },
  offset: -50
})
//RoadMap End

//Team Start
var waypointTeamDown = new Waypoint({
  element: document.getElementById('_Team'),
  handler: function (direction) {

    if (direction == 'down') {

      $('#menuVision').removeClass(' selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').addClass(' selected');

     
    }
  },
  offset: 10
})

var waypointTeamUp = new Waypoint({
  element: document.getElementById('_Team'),
  handler: function (direction) {

    if (direction == 'up') {

      $('#menuVision').removeClass(' selected');
      $('#menuICO').removeClass(' selected');
      $('#menuHow').removeClass(' selected');
      $('#menuMap').removeClass(' selected');
      $('#menuTeam').addClass(' selected');

     
    }
  },
  offset: '10%'
})
//Team End
