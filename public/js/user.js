$(function () {
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/games/" + id, {
            type: "DELETE",
        }).then(
            function () {
                location.reload();
            }
        );
    });
});