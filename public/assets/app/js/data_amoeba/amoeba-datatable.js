let jsonAmoeba = document.getElementById("jsonAmoeba").title;
let csrfToken = document.getElementById("csrfToken").value;

let DatatableDataLocalDemo = {
    init: function () {
    let e, a, i;
        e = JSON.parse(jsonAmoeba), a = $(".m_datatable").mDatatable({
            data: {
                type: "local",
                source: e,
                pageSize: 10
            },
            layout: {
                theme: "default",
                class: "",
                scroll: !1,
                footer: !1
            },
            sortable: !0,
            pagination: !0,
            search: {
                input: $("#generalSearch")
            },
            columns: [{
                field: "NamaAmoeba",
                title: "Nama",
                width: 300
            }, {
                field: "BatchAmoeba",
                title: "Batch Amoeba",
                width: 100
            }, {
                field: "Status",
                title: "Status",
                template: function (e) {
                    let a = {
                        "false": {
                            title: "INACTIVE",
                            class: " m-badge--danger"
                        },
                        "true": {
                            title: "ACTIVE",
                            class: " m-badge--success"
                        }
                    };
                    return '<span class="m-badge ' + a[e.Status].class + ' m-badge--wide">' + a[e.Status].title + "</span>"
                }
            }, {
                field: "IncbAcc",
                title: "Incubation / Acceleration"
            }, {
                field: "TipeInovasi",
                title: "Tipe Inovasi"
            }, {
                field: "AreaInovasi",
                title: "Area Inovasi"
            }, {
                field: "Tribe",
                title: "Tribe"
            }, {
                field: "Actions",
                width: 110,
                title: "Actions",
                sortable: !1,
                overflow: "visible",
                template: function (e) {
                    return '\t\t\t\t\t\t<a href="/amoeba/profile-amoeba/'+ e.Id +'" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Profile Details">\t\t\t\t\t\t\t<i class="la la-user"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }]
        }), i = a.getDataSourceQuery(), $("#m_form_status").on("change", function () {
            a.search($(this).val(), "Status")
        }).val(void 0 !== i.Status ? i.Status : ""), $("#m_form_batch").on("change", function () {
            a.search($(this).val(), "BatchInovation")
        }).val(void 0 !== i.BatchInovation ? i.BatchInovation : ""), $("#m_form_status, #m_form_batch").selectpicker()
    }
};
jQuery(document).ready(function () {
    DatatableDataLocalDemo.init()
});