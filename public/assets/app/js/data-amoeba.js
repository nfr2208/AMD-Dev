let json = document.getElementById("jsonAmoebas").title;

let DatatableDataLocalDemo = {
    init: function () {
        let e, a, i;
        e = JSON.parse(json), a = $(".m_datatable").mDatatable({
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
                field: "idAmoeba",
                title: "ID Amoeba",
            }, {
                field: "namaAmoeba",
                title: "Nama Amoeba",
                responsive: {
                    visible: "lg"
                }
            }, {
                field: "deskripsi1",
                title: "Deskripsi 1",
                responsive: {
                    visible: "lg"
                }
            }, {
                field: "deskripsi2",
                title: "Deskripsi 2",
                responsive: {
                    visible: "lg"
                }
            }, {
                field: "statusAmoeba",
                title: "Status Amoeba",
                template: function (e) {
                    let a = {
                        'Aktif': {
                            title: "Aktif",
                            class: " m-badge--success"
                        },
                        'Tidak Aktif': {
                            title: "Tidak Aktif",
                            class: " m-badge--danger"
                        }
                    };
                    return '<span class="m-badge ' + a[e.statusAmoeba].class + ' m-badge--wide">' + a[e.statusAmoeba].title + "</span>"
                }
            }, {
                field: "currentPhase",
                title: "Current Phase",
                template: function (e) {
                    let a = {
                        'CV': {
                            title: "CV",
                            state: "accent"
                        },
                        'PV': {
                            title: "PV",
                            state: "warning"
                        },
                        'BMV': {
                            title: "BMV",
                            state: "success"
                        },
                        'MV': {
                            title: "MV",
                            state: "danger"
                        }
                    };
                    return '<span class="m-badge m-badge--' + a[e.currentPhase].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + a[e.currentPhase].state + '">' + a[e.currentPhase].title + "</span>"
                }
            }, {
                field: "batch",
                title: "Batch"
            }, {
                field: "incbAcc",
                title: "Incubator / Accelerator"
            }, {
                field: "tipeInovasi",
                title: "Tipe Inovasi"
            }, {
                field: "areaInovasi",
                title: "Area Inovasi"
            }, {
                field: "dtp",
                title: "DTP",
                responsive: {
                    visible: "lg"
                }
            }, {
                field: "mappingPillarDDS",
                title: "Mapping Pillar DDS"
            }, {
                field: "mappingCFU",
                title: "Mapping CFU"
            }, {
                field: "core",
                title: "Core"
            }, {
                field: "ecosystem",
                title: "Ecosystem"
            }, {
                field: "Actions",
                width: 110,
                title: "Actions",
                sortable: !1,
                overflow: "visible",
                template: function (e, a, i) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (i.getPageSize() - a <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="/detail-amoeba/'+ e.idAmoeba +'"><i class="la la-user"></i> View Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="/edit-amoeba/'+ e.idAmoeba +'?edit=true"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<form action="/delete-amoeba" method="POST" class="d-inline"><input type="hidden" name="idAmoeba" value="'+ e.idAmoeba +'"><button class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" type="submit" title="Delete"><i class="la la-trash"></i></button></form>\t\t\t\t\t'
                }
            }]
        }), i = a.getDataSourceQuery(), $("#m_form_status").on("change", function () {
            a.search($(this).val(), "statusAmoeba")
        }).val(void 0 !== i.statusAmoeba ? i.statusAmoeba : ""), $("#m_form_phase").on("change", function () {
            a.search($(this).val(), "currentPhase"), console.log(i.statusAmoeba);
        }).val(void 0 !== i.currentPhase ? i.currentPhase : ""), $("#m_form_status, #m_form_phase").selectpicker()
    }
};
jQuery(document).ready(function () {
    DatatableDataLocalDemo.init()
});