$(".wrap-item").click(function () {
    var flag = $(".wrap-item").index($(this));
    $(".wrap-item").css({
        "color": "black",
        "background": "#fff"
    })
    $(this).css({
        "background": "rgb(75, 121, 16)",
        "color": "#fff"
    })
})
$(".list-img").click(function () {
    console.log($(this).attr("src"));
    console.log($(this).next().text());
    $(".bigPic").children("img").attr("src", $(this).attr("src"))
    $("#bigcontext").html($(this).next().text());
    $(".magnifyPic").css("display", "block");
    setTimeout(function () {
        $(".bigPic").css("transform", "scale(1) translateX(-50%) translateY(-50%)");
    }, 200)

    $(".bigPic-close").click(function () {
        $(".bigPic").css("transform", "scale(0) translateX(-50%)  translateY(-50%)");
        setTimeout(function () {
            $(".magnifyPic").css("display", "none");
        }, 1000);
    })
})