﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    //$(".modalGalaxy").click(function () {
    //    var url = $(this).attr("data-url");
    //    $.get(url,
    //        function (res) {
    //            $(".seccionModal").html(res);
    //            $(".contenedor").modal("show");
    //        })
    //})
    $("body").on("click", ".modalGalaxy", function () {
        var url = $(this).attr("data-url");
        $.get(url,
            function (res) {
                $(".seccionModal").html(res);
                $(".contenedor").modal("show");
            })
    })
})
//function editarModal(cod) {
//    $.get("articulo/editarparcial",
//        { id: cod },
//        function (res) {
//            $(".seccionModal").html(res);
//            $(".contenedor").modal("show");
//        })
//}
function cerrarModal() {
    $(".contenedor").modal("hide");
    $("#frmLista").submit();
}
