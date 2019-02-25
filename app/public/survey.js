$("#submitButton").on("click", function(event) {
    event.preventDefault();

    var valid = true;
    if($("#name").val() === "" || $("#photo").val() === "") {
        valid = false;
    } else if($("#question1").val() === "empty" || $("#question2").val() === "empty" || $("#question3").val() === "empty" || $("#question4").val() === "empty" || $("#question5").val() === "empty" || $("#question6").val() === "empty" || $("#question7").val() === "empty" || $("#question8").val() === "empty" || $("#question9").val() === "empty" || $("#question10").val() === "empty") {
        valid = false;
    }
    if(valid === true) {
        var newUser = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
                $("#question1").val(),
                $("#question2").val(),
                $("#question3").val(),
                $("#question4").val(),
                $("#question5").val(),
                $("#question6").val(),
                $("#question7").val(),
                $("#question8").val(),
                $("#question9").val(),
                $("#question10").val()
            ]
        };
        var currentURL = window.location.origin;
        // Ajax call for receiving response after POST req
        $.post(currentURL + "/api/friends", newUser, function(data) {
            $("#bestFriend").text(data.name);
            $("#bestFriendPhoto").attr("src", data.photo);
            $("#bestFriendModal").modal("toggle");
        });
    } else {
        alert("Looks like you're missing a few things...");
    }
});