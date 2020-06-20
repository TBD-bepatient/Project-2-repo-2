$(function () {
    $(".search").on("click", function (event) {

    });
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/game/" + id, {
            type: "DELETE",
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

    });
});