let total = document.getElementById("total").title;

let active = document.getElementById("active").title;
let notActive = document.getElementById("notActive").title;

let cv = document.getElementById("cv").title;
let pv = document.getElementById("pv").title;
let bmv = document.getElementById("bmv").title;
let mv = document.getElementById("mv").title;

let chartAmoeba = {
    init: function () {
        let a, r;
        ! function () {
            if (0 != $("#phase_chart").length) {
                let e = new Chartist.Pie("#phase_chart", {
                    series: [{
                        value: cv/total*100,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("danger")
                        }
                    }, {
                        value: pv/total*100,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("success")
                        }
                    }, {
                        value: bmv/total*100,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("warning")
                        }
                    }, {
                        value: mv/total*100,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("accent")
                        }
                    }],
                    labels: [1, 2, 3, 4]
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
        function () {
            if (0 != $("#amoeba_chart").length) {
                let e = new Chartist.Pie("#amoeba_chart", {
                    series: [{
                        value: active/total*100,
                        className: "custom",
                        meta: {
                            color: mApp.getColor("success")
                        }
                    }, {
                        value: notActive/total*100,
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
    }
};

jQuery(document).ready(function () {
    chartAmoeba.init()
});