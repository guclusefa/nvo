$(document).ready(function () {
/*     $('#dataTable').DataTable({
        dom: 'PQlfrtip',
        responsive: true,
        "language": {
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json",
            searchPlaceholder: "Rechercher...",
        },
        "bInfo": true,
        "bLengthChange": false,
        "pageLength": 25,
    }); */
    var table = $('#dataTable').DataTable({
        searchPanes: true,
        responsive: true,
        searchPanes: {
/*             initCollapsed: true, */
/*             clear: false */
        }
    });
    table.searchPanes.container().prependTo(table.table().container());
    table.searchPanes.resizePanes();
});


