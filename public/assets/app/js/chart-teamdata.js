let activeTeamData = document.getElementById("activeTeamData").title;
let notActiveTeamData = document.getElementById("notActiveTeamData").title;

let alumniTeamData = document.getElementById("alumniTeamData").title;
let activeTalentTeamData = document.getElementById("activeTalentTeamData").title;
let moveTeamData = document.getElementById("moveTeamData").title;

let chartAmoeba = {
    init: function () {
        let a, r;
        ! function () {
            if (0 != $("#flagging_chart").length) {
                let e = new Chartist.Pie("#flagging_chart", {
                    series: [{
                        value: alumniTeamData,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("danger")
                        }
                    }, {
                        value: activeTalentTeamData,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("success")
                        }
                    }, {
                        value: moveTeamData,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("warning")
                        }
                    }],
                    labels: [1, 2, 3]
                }, {
                    donut: !0,
                    donutWidth: 17,
                    showLabel: !1
                });
                e.on("draw", function (e) {
                    if ("slice" === e.type) {
                        let t = e.element._node.getTotalLength();
                        e.element.attr({
                            "stroke-dasharray": t + "px " + t + "px"
                        });
                        let a = {
                            "stroke-dashoffset": {
                                id: "anim" + e.index,
                                dur: 1e3,
                                from: -t + "px",
                                to: "0px",
                                easing: Chartist.Svg.Easing.easeOutQuint,
                                fill: "freeze",
                                stroke: e.meta.color
                            }
                        };
                        0 !== e.index && (a["stroke-dashoffset"].begin = "anim" + (e.index - 1) + ".end"), e.element.attr({
                            "stroke-dashoffset": -t + "px",
                            stroke: e.meta.color
                        }), e.element.animate(a, !1)
                    }
                }), e.on("created", function () {
                    window.__anim21278907124 && (clearTimeout(window.__anim21278907124), window.__anim21278907124 = null), window.__anim21278907124 = setTimeout(e.update.bind(e), 15e3)
                })
            }
        }(),
        ! function () {
            if (0 != $("#status_chart").length) {
                let e = new Chartist.Pie("#status_chart", {
                    series: [{
                        value: activeTeamData,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("success")
                        }
                    }, {
                        value: notActiveTeamData,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("danger")
                        }
                    }],
                    labels: [1, 2]
                }, {
                    donut: !0,
                    donutWidth: 17,
                    showLabel: !1
                });
                e.on("draw", function (e) {
                    if ("slice" === e.type) {
                        let t = e.element._node.getTotalLength();
                        e.element.attr({
                            "stroke-dasharray": t + "px " + t + "px"
                        });
                        let a = {
                            "stroke-dashoffset": {
                                id: "anim" + e.index,
                                dur: 1e3,
                                from: -t + "px",
                                to: "0px",
                                easing: Chartist.Svg.Easing.easeOutQuint,
                                fill: "freeze",
                                stroke: e.meta.color
                            }
                        };
                        0 !== e.index && (a["stroke-dashoffset"].begin = "anim" + (e.index - 1) + ".end"), e.element.attr({
                            "stroke-dashoffset": -t + "px",
                            stroke: e.meta.color
                        }), e.element.animate(a, !1)
                    }
                }), e.on("created", function () {
                    window.__anim21278907124 && (clearTimeout(window.__anim21278907124), window.__anim21278907124 = null), window.__anim21278907124 = setTimeout(e.update.bind(e), 15e3)
                })
            }
        }();

        // ! function () {
        //     var e = $("#m_chart_daily_sales");
        //     if (0 != e.length) {
        //         var t = {
        //             labels: ["Batch-1", "Batch-2", "Batch-3", "Batch-4", "Batch-5", "Batch-6", "Batch-7", "Batch-8", "Batch-9", "Batch-10", "Batch-11", "Batch-12"],
        //             datasets: [{
        //                 backgroundColor: mApp.getColor("success"),
        //                 data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20]
        //             }, {
        //                 backgroundColor: "#f3f3fb",
        //                 data: [15, 20, 25, 30, 25, 20, 15, 20, 25, 30, 25, 20]
        //             }]
        //         };
        //         new Chart(e, {
        //             type: "bar",
        //             data: t,
        //             options: {
        //                 title: {
        //                     display: !1
        //                 },
        //                 tooltips: {
        //                     intersect: !1,
        //                     mode: "nearest",
        //                     xPadding: 10,
        //                     yPadding: 10,
        //                     caretPadding: 10
        //                 },
        //                 legend: {
        //                     display: !1
        //                 },
        //                 responsive: !0,
        //                 maintainAspectRatio: !1,
        //                 barRadius: 4,
        //                 scales: {
        //                     xAxes: [{
        //                         display: !1,
        //                         gridLines: !1,
        //                         stacked: !0
        //                     }],
        //                     yAxes: [{
        //                         display: !1,
        //                         stacked: !0,
        //                         gridLines: !1
        //                     }]
        //                 },
        //                 layout: {
        //                     padding: {
        //                         left: 0,
        //                         right: 0,
        //                         top: 0,
        //                         bottom: 0
        //                     }
        //                 }
        //             }
        //         })
        //     }
        // }();

    }
};

jQuery(document).ready(function () {
    chartAmoeba.init()
});