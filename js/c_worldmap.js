

$(function () {
    // Prepare demo data
    var data = [

    ];
    var mapdata = [{
        name: '10$',
        lat: 42.98339,
        lon: -81.23304
    },
    {
        name: '100$',
        lat: 51.50853,
        lon: -0.12574
    },
    {
        name: '50$',
        lat: 28.7041,
        lon: 77.1025
    },
    {
        name: '400$',
        lat: 26.2041,
        lon: 28.0473
    },
    {
        name: '20$',
        lat: 20.766387,
        lon: -103.535156
    },
    {
        name: '500$',
        lat: -16.836090,
        lon: -55.019531
    },
    {
        name: '150$',
        lat: -27.868217,
        lon: -51.503906
    },
    {
        name: '100$',
        lat: -23.433009,
        lon: 31.464844
    },
    {
        name: '265$',
        lat: 60.136035,
        lon: 37.792969
    },
    {
        name: '300$',
        lat: 65.279688,
        lon: 76.816406
    },
    {
        name: '250$',
        lat: 66.429931,
        lon: 174.550781
    },
    {
        name: '150$',
        lat: -35.056980,
        lon: 148.183594
    }
    ]

    //debugger; 

    var map = Highcharts.maps['custom/world'];
    var features = map.features;

    // Initiate the chart
    $('#containerMap').highcharts('Map', {
        title: {
            useHTML: true,
            text: '&nbsp;'
        },
        credits: {
            enabled: false
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        tooltip:
            {
                enabled: false
            },
        mapNavigation: {
            enabled: false
        },
        colorAxis: {
            min: 0
        },
        plotOptions: {
            series: {
                marker: {
                    states: {
                        hover: {
                            enabled: false
                        }
                    }
                }
            }
        },
        series: [{
            data: data,
            borderColor: '#fff',
            borderWidth: 0,
            mapData: Highcharts.maps['custom/world'],
            name: 'Iagon data',
            enableMouseTracking: false

        },
        {
            type: 'mappoint',
            name: 'Iagon countries',
            color: '#1AA5F2',
            marker: {
                symbol: 'url(./images/pin2_small.png)'
            },
            dataLabels: {
                useHTML: true,
                align: "right",
                format: '{point.name}',
                color: '#1AA5F2'
            },
            data: mapdata
        }
        ]
    }, function (chart) {
        // console.log(this.fromLatLonToPoint({ lat: 43.6532, lon: -79.3832 }));
        // console.log(this.fromLatLonToPoint({ lat: 1.3521, lon: 103.8198 }));

    });
});

