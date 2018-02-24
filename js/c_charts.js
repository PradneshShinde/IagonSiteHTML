var colors = [{
    radialGradient: {
        cx: .5,
        cy: .3,
        r: .7
    },
    stops: [
        [0, "#219EEE"]
    ]
}, {
    radialGradient: {
        cx: .5,
        cy: .3,
        r: 1
    },
    stops: [
        [0, "#8B63BE"],
        [1, Highcharts.Color("#26A5EE").brighten(0).get("rgb")]
    ]
}];
Highcharts.chart("chart-mobile", {
    credits: {
        enabled: !1
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: !1,
        type: "pie"
    },
    title: {
        style: {
            color: "#219EEE",
            fontWeight: "bolder",
            fontFamily: "FontLight",
            fontSize: "17px"
        },
        text: "20%",
        align: "center",
        verticalAlign: "middle",
        y: 0
    },
    tooltip: {
        enabled: !1
    },
    plotOptions: {
        pie: {
            borderWidth: 3,
            slicedOffset: 10,
            startAngle: 0,
            allowPointSelect: !0,
            cursor: "pointer",
            dataLabels: {
                enabled: !0,
                shadow: !1,
                format: "{point.name}",
                color: "#219EEE",
                distance: 5,
                style: {
                    textShadow: "none",
                    fontFamily: "FontLight",
                    fontSize: "9px"
                },
                connectorColor: "transperent"
            }
        }
    },
    series: [{
        point: {
            events: {
                click: function(e) {
                    this.series.chart.setTitle({
                        text: this.y + "%"
                    })
                }
            }
        },
        name: "",
        size: "45%",
        innerSize: "60%",
        data: [{
            name: "Crowdfunding",
            y: 50,
            color: colors[1]
        }, {
            name: "Miner<br>incentive ",
            y: 10,
            color: colors[0]
        }, {
            name: "Development<br>team ",
            y: 10,
            color: colors[0]
        }, {
            name: "Internal<br>team &<br>advisors",
            y: 10,
            color: colors[0]
        }, {
            name: "Pre-ico ",
            y: 20,
            sliced: !0,
            selected: !0,
            color: colors[0]
        }]
    }]
});
colors = [{
    radialGradient: {
        cx: .5,
        cy: .3,
        r: .7
    },
    stops: [
        [0, "#219EEE"]
    ]
}, {
    radialGradient: {
        cx: .5,
        cy: .3,
        r: 1
    },
    stops: [
        [0, "#8B63BE"],
        [1, Highcharts.Color("#26A5EE").brighten(0).get("rgb")]
    ]
}];
Highcharts.chart("chart-web", {
    credits: {
        enabled: !1
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: !1,
        type: "pie"
    },
    title: {
        style: {
            color: "#219EEE",
            fontWeight: "bolder",
            fontFamily: "FontLight",
            fontSize: "20px"
        },
        text: "20%",
        align: "center",
        verticalAlign: "middle",
        y: 0
    },
    tooltip: {
        enabled: !1
    },
    plotOptions: {
        pie: {
            borderWidth: 3,
            slicedOffset: 20,
            startAngle: 0,
            allowPointSelect: !0,
            cursor: "pointer",
            dataLabels: {
                enabled: !0,
                shadow: !1,
                format: "{point.name}",
                color: "#219EEE",
                style: {
                    textShadow: "none",
                    fontFamily: "FontLight"
                },
                connectorColor: "transperent"
            }
        }
    },
    series: [{
        point: {
            events: {
                click: function(e) {
                    this.series.chart.setTitle({
                        text: this.y + "%"
                    })
                }
            }
        },
        name: "",
        size: "80%",
        innerSize: "70%",
        data: [{
            name: "Crowdfunding",
            y: 50,
            color: colors[1]
        }, {
            name: "Miner<br>incentive ",
            y: 10,
            color: colors[0]
        }, {
            name: "Development<br>team ",
            y: 10,
            color: colors[0]
        }, {
            name: "Internal<br>team &<br>advisors",
            y: 10,
            color: colors[0]
        }, {
            name: "Pre-ico ",
            y: 20,
            sliced: !0,
            selected: !0,
            color: colors[0]
        }]
    }]
});