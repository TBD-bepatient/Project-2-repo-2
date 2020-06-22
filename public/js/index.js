$(function () {
    $(".login").on("click", function (event) {
        event.preventDefault();
        console.log(`logging in ${$("#user")[0].selectedOptions[0].innerText}`)
    });
    $(".signup").on("click", function (event) {
        event.preventDefault();
        console.log(`signing up ${$("#user")[0].selectedOptions[0].innerText}`)
    });
});