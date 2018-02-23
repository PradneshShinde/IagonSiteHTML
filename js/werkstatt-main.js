var roadMap = new RoadMap([
    ['September 2017', 'Platform Design &', 'Architechture'],
    ['October 2017', 'Platform Development', 'Kick Off'],
    ['November 2017', 'Whitepaper', 'Presentation'],
    ['December 2017', 'Platform', 'Launch'],
    ['February 2018', 'pre-ICO', ''],
    ['March 2018', 'ICO Launch', ''],
    ['May 2018', 'Smart', 'Contract'],
    ['Aug 2018', 'Distribued', 'Storage'], 
    ['Nov 2018', 'Distribued', 'Processing']
]);


new Waypoint({
    element: document.querySelector('#roadmap-elm'),
    handler: function (direction) {
        if(direction === 'down'){
            document.querySelector('#roadmap-elm').classList.add('viewable');
            roadMap.play();
        }else{
            document.querySelector('#roadmap-elm').classList.remove('viewable')
            roadMap.pause();
        }
    },
    offset: '50%'
})

new Waypoint({
    element: document.querySelector('#roadmap-elm'),
    handler: function (direction) {
        if (direction === 'up') {
            roadMap.play();
        } else {
            roadMap.pause();
        }
    },
    offset: '-50%'
})