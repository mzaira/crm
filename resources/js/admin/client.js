


console.log('asdasd')
const adminClient = {

    datatable: function() {
        $("#client_table").DataTable({

            processing: true,
            serverSide: true,
            ajax: route,
            headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
            order: [[0, "desc"]],
            columns: [
            {
                data: "id",
                visible: false,
            },
            {
                data: "name",
            },
            {
                data: "email",
            },
            {
                data: "created_at",
            },
            ],
            columnDefs: [
            {
                render: function(id, type, row) {
                    return `<strong> ${row['created_at']}`;
                },
                targets: 3,
            },
            ],
        });
    },


}