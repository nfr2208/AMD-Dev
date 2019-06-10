let jsonUsers = document.getElementById("jsonUsers").title;
let csrfToken = document.getElementById("csrfToken").value;

var DatatableAutoColumnHideDemo = {
    init: function () {
    let e, a, i;
        e = JSON.parse(jsonUsers), a = $(".m_datatable").mDatatable({
            data: {
                type: "local",
                source: e,
                pageSize: 10,
            },
            sortable: !0,
            pagination: !0,
            toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            },
            search: {
                input: $("#generalSearch")
            },
            rows: {
                autoHide: !0
            },
            columns: [{
                field: "name",
                title: "Name",
                width: 150
            }, {
                field: "email",
                title: "Email",
                width: 150,
                responsive: {
                    visible: "lg"
                }
            }, {
                field: "createdAt",
                title: "created At",
                width: 175,
                responsive: {
                    visible: "lg"
                }
            }]
        }), i = a.getDataSourceQuery(), $("#m_form_status").on("change", function () {
            a.search($(this).val(), "status")
        }).val(void 0 !== i.status ? i.status : ""), $("#m_form_batch").on("change", function () {
            a.search($(this).val(), "batch_inovation")
        }).val(void 0 !== i.batch_inovation ? i.batch_inovation : ""), $("#m_form_status, #m_form_batch").selectpicker()
    }
};
jQuery(document).ready(function () {
    DatatableAutoColumnHideDemo.init()
});