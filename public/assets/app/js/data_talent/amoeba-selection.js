let jsonAmoeba = document.getElementById("jsonAmoeba").title;

var DatatableRecordSelectionDemo = function () {
    var t = {
        data: {
            // type: "remote",
            // source: {
            //     read: {
            //         url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php"
            //     }
            // },
            type: "local",
            source: JSON.parse(jsonAmoeba),
            pageSize: 10,
        },
        layout: {
            theme: "default",
            scroll: !1,
            footer: !1,
            height: 350
        },
        sortable: !0,
        pagination: !0,
        columns: [{
            field: "Id",
            title: "#",
            sortable: !1,
            width: 20,
            textAlign: "center",
            selector: {
                class: "m-checkbox--solid m-checkbox--brand"
            },
            template: function (t) {
                return t.Id + "-" + t.Nama
            }
        }, {
            field: "Nama",
            title: "Nama Amoeba",
            width: 200
        }]
    };
    return {
        init: function () {
            ! function () {
                t.search = {
                    input: $("#generalSearch")
                };
                var e = $("#local_record_selection").mDatatable(t);
                $("#m_form_status,#m_form_type").selectpicker(), e.on("m-datatable--on-check m-datatable--on-uncheck m-datatable--on-layout-updated", function (t) {
                    var a = e.rows(".m-datatable__row--active").nodes().length;
                    $("#m_datatable_selected_number").html(a), a === 1 ? $("#m_datatable_group_action_form").collapse("show") : $("#m_datatable_group_action_form").collapse("hide")
                }), $("#m_fetch_id").on("click", function (t) {
                    for (var a = e.rows(".m-datatable__row--active").nodes().find('.m-checkbox--single > [type="checkbox"]').map(function (t, e) {
                            return $(e).val()
                        }), n = document.createDocumentFragment(), l = 0; l < a.length; l++) {
                            let str = a[l].split("-");
                            $("#m_selected_amoeba").html(str[1]);
                            document.getElementById("m_selected_amoebaId").value = str[0];
                    }
                })
            }()
        }
    }
}();
jQuery(document).ready(function () {
    DatatableRecordSelectionDemo.init()
});