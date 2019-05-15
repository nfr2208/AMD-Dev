let jsonTeamData = document.getElementById("jsonTeamData").title;
console.log(JSON.parse(jsonTeamData));

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
                title: "No.",
            }, {
                field: "id_peserta",
                title: "ID Peserta",
            }, {
                field: "nama",
                title: "Nama",
                width: 300,
                responsive: {
                    visible: "lg"
                }
            }, {
                field: "nama_tim",
                title: "Nama Tim",
                width: 300,
                responsive: {
                    visible: "lg"
                }
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
                            title: "NOT ACTIVE",
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
                width: 300,
                responsive: {
                    visible: "lg"
                }
            }]
        }), i = a.getDataSourceQuery(), $("#m_form_status").on("change", function () {
            a.search($(this).val(), "status")
        }).val(void 0 !== i.status ? i.status : ""), $("#m_form_phase").on("change", function () {
            a.search($(this).val(), "batch_inovation")
        }).val(void 0 !== i.batch_inovation ? i.batch_inovation : ""), $("#m_form_status, #m_form_phase").selectpicker()
    }
};
jQuery(document).ready(function () {
    DatatableDataLocalDemo.init()
});