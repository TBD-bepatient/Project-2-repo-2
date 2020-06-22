$(function () {
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id)
        // $.ajax("/api/games/" + id, {
        //     type: "DELETE",
        // }).then(
        //     function () {
        //         location.reload();
        //     }
        // );
    });
    $(".search").on("click", function (event) {
        console.log("searching games via api")
    });
    $(".send").on("click", function (event) {
        console.log("sending data to database")
    });
});