let jsonTalent = document.getElementById("jsonTalent").title;
let csrfToken = document.getElementById("csrfToken").value;

let DatatableDataLocalDemo = {
    init: function () {
    let e, a, i;
        e = JSON.parse(jsonTalent), a = $(".m_datatable").mDatatable({
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
                field: "Nama",
                title: "Nama",
                width: 300
            }, {
                field: "NamaAmoeba",
                title: "Nama Amoeba",
                width: 265
            }, {
                field: "NIK",
                title: "NIK",
                width: 125
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
                field: "NoTelp",
                title: "No. Telp"
            }, {
                field: "Flagging",
                title: "Flagging"
            }, {
                field: "TipeInovator",
                title: "Tipe Inovator"
            }, {
                field: "TimStruktur",
                title: "Tim Struktur"
            }, {
                field: "LokerSaatIni",
                title: "Loker Saat Ini",
            }]
            //, {
            //     field: "Actions",
            //     width: 110,
            //     title: "Actions",
            //     sortable: !1,
            //     overflow: "visible",
            //     template: function (e, a, i) {
            //         return '\t\t\t\t\t\t<div class="dropdown ' + (i.getPageSize() - a <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="/dashboard/edit-data-talent/'+ e.id +'?edit=true"><i class="la la-edit"></i> Edit Data Talent</a>\t\t\t\t\t\t    \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<form action="/dashboard/delete-data-talent" method="POST" class="d-inline"><input type="hidden" value="'+ csrfToken +'" name="_csrf"><input type="hidden" name="id" value="'+ e.id +'"><button class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" type="submit" title="Delete"><i class="la la-trash"></i></button></form>\t\t\t\t\t'
            //     }
            // } ]
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