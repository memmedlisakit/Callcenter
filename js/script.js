$(document).ready(function () {
    $(".button").click(callcenetr_function);
    function callcenetr_function() {
        var letter = $(".input").val()[0];
        if (letter == letter.toLowerCase()) {
            var callcenter = $("<div class='callcenter'></div>");
            var callcenter_img = $(" <img src='images/callcenter.png'>");
            var callcenter_span = $("<span>" + $(".input").val() + "<span>");
            callcenter.append(callcenter_img, callcenter_span);
            callcenter.css("display", "block");
            $(".contact_wrap").append(callcenter);
            callcenter_img.click(function () {
                $(".sil").fadeIn();
                $(this).parent().addClass("clear");
            })
        } else {
            var user = $("<div class='user'></div>");
            var user_img = $(" <img src='images/callcenterboy.png'>");
            var user_span = $("<span>" + $(".input").val() + "</span>");
            user.append(user_img, user_span);
            user.css("display", "block");
            $(".contact_wrap").append(user);
            user_img.click(function () {
                $(".sil").fadeIn();
                $(this).parent().addClass("clear");
            })
        }

    };

    $(".sil").click(function () {
        $(".clear").remove();
    })

    $(".popup").click(function () {
        $(".container").fadeIn();
        $(this).fadeOut();
    })
















    $(document).keyup(function (event) {
        if (event.which == 13) {
            callcenetr_function();
        }
    })
});




document.addEventListener("DOMContentLoaded", function () {
    var input = document.querySelector(".input");
    input.focus();
})