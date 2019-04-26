var DatatablesBasicScrollable = {
    init: function () {
        $("#view_amoeba_table").DataTable({
            scrollY: "50vh",
            scrollX: !0,
            scrollCollapse: !0,
            columnDefs: [{
                targets: -1,
                title: "Actions",
                orderable: !1
                // render: function (a, e, t, n) {
                //     return '\n                        <span class="dropdown">\n                            <a href="#" class="btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="m-portlet__nav-link btn m-btn m-btn--hover-brand m-btn--icon m-btn--icon-only m-btn--pill" title="View">\n                          <i class="la la-edit"></i>\n                        </a>'
                // }
            }, {
                targets: 5,
                render: function (a, e, t, n) {
                    var l = {
                        "Aktif": {
                            title: "Aktif",
                            class: " m-badge--success"
                        },
                        "Tidak Aktif": {
                            title: "Danger",
                            class: " m-badge--danger"
                        }
                    };
                    return void 0 === l[a] ? a : '<span class="m-badge ' + l[a].class + ' m-badge--wide">' + l[a].title + "</span>"
                }
            }, {
                targets: 6,
                render: function (a, e, t, n) {
                    var l = {
                        "CV": {
                            title: "CV",
                            state: "danger"
                        },
                        "PV": {
                            title: "PV",
                            state: "primary"
                        },
                        "BMV": {
                            title: "BMV",
                            state: "accent"
                        },
                        "MV": {
                            title: "MV",
                            state: "success"
                        }
                    };
                    return void 0 === l[a] ? a : '<span class="m-badge m-badge--' + l[a].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + l[a].state + '">' + l[a].title + "</span>"
                }
            }]
        })
    }
};
jQuery(document).ready(function () {
    DatatablesBasicScrollable.init()
});