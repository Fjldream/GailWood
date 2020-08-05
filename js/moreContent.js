$(".list-close").click(function () {
    $(".menu-list").animate({
        width: "0%"
    }, 300, function () {
        $(".menu").css({
            display: "none"
        });
    })


});
$(".menu-btn").click(function () {
    $(".menu").css({
        display: "block"
    });
    $(".menu-list").animate({
        width: "50%"
    }, 300)
});