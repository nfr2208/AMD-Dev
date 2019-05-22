let jsonTeamData = document.getElementById("jsonTeamData").title;
let csrfToken = document.getElementById("csrfToken").value;

let DatatableDataLocalDemo = {
    init: function () {
    let e, a, i;
        e = JSON.parse(jsonTeamData), a = $(".m_datatable").mDatatable({
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
                field: "id",
                title: "#",        
                width: 35
            }, {
                field: "id_peserta",
                title: "ID Peserta",
                width: 100
            }, {
                field: "nama",
                title: "Nama",
                width: 300
            }, {
                field: "nama_tim",
                title: "Nama Tim",
                width: 265
            }, {
                field: "batch_inovation",
                title: "Batch Inovation"
            }, {
                field: "nik",
                title: "NIK"
            }, {
                field: "bp",
                title: "BP"
            }, {
                field: "status",
                title: "Status",
                template: function (e) {
                    let a = {
                        0: {
                            title: "INACTIVE",
                            class: " m-badge--danger"
                        },
                        1: {
                            title: "ACTIVE",
                            class: " m-badge--success"
                        }
                    };
                    return '<span class="m-badge ' + a[e.status].class + ' m-badge--wide">' + a[e.status].title + "</span>"
                }
            }, {
                field: "flagging",
                title: "Flagging"
            }, {
                field: "tipe_inovator",
                title: "Tipe Inovator"
            }, {
                field: "tim_struktur",
                title: "Tim Struktur"
            }, {
                field: "c_level",
                title: "C-Level"
            }, {
                field: "unit_kerja_asal",
                title: "Unit Kerja Asal"
            }, {
                field: "loker_asal",
                title: "Loker Asal"
            }, {
                field: "unit_kerja_saat_ini",
                title: "Unit Kerja Saat Ini"
            }, {
                field: "loker_saat_ini",
                title: "Loker Saat Ini"
            }, {
                field: "no_telp",
                title: "No. Telp"
            }, {
                field: "email",
                title: "Email",
                width: 300
            }, {
                field: "Actions",
                width: 110,
                title: "Actions",
                sortable: !1,
                overflow: "visible",
                template: function (e, a, i) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (i.getPageSize() - a <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="/edit-data-talent/'+ e.id +'?edit=true"><i class="la la-edit"></i> Edit Data Talent</a>\t\t\t\t\t\t    \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<form action="/delete-data-talent" method="POST" class="d-inline"><input type="hidden" value="'+ csrfToken +'" name="_csrf"><input type="hidden" name="id" value="'+ e.id +'"><button class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" type="submit" title="Delete"><i class="la la-trash"></i></button></form>\t\t\t\t\t'
                }
            }]
        }), i = a.getDataSourceQuery(), $("#m_form_status").on("change", function () {
            a.search($(this).val(), "status")
        }).val(void 0 !== i.status ? i.status : ""), $("#m_form_batch").on("change", function () {
            a.search($(this).val(), "batch_inovation")
        }).val(void 0 !== i.batch_inovation ? i.batch_inovation : ""), $("#m_form_status, #m_form_batch").selectpicker(), 
        $("#m_datatable_hide_column").on("click", function () {
            a.columns("email").visible(!1);
            a.columns("no_telp").visible(!1);
            a.columns("loker_saat_ini").visible(!1);
            a.columns("unit_kerja_saat_ini").visible(!1);
            a.columns("loker_asal").visible(!1);
            a.columns("unit_kerja_asal").visible(!1);
            a.columns("flagging").visible(!1);
            a.columns("bp").visible(!1);
            a.columns("nik").visible(!1);
        }), $("#m_datatable_show_column").on("click", function () {
            a.columns("email").visible(!0);
            a.columns("no_telp").visible(!0);
            a.columns("loker_saat_ini").visible(!0);
            a.columns("unit_kerja_saat_ini").visible(!0);
            a.columns("loker_asal").visible(!0);
            a.columns("unit_kerja_asal").visible(!0);
            a.columns("flagging").visible(!0);
            a.columns("bp").visible(!0);
            a.columns("nik").visible(!0);
        })
    }
};
jQuery(document).ready(function () {
    DatatableDataLocalDemo.init()
});