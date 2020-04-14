$(document).ready(function () {
    $("#best-tab").tabs({ active: 0 });
    $("#newtimeline").tabs({ active: 0 });
    $("#news-tab").tabs({ active: 0 });

    $(".best-donation-content").on("mouseover", function () {
        var hide = "." + $(this).attr("id");
        $(hide).css("visibility", "visible")
    })
    $(".best-donation-hide").on("mouseout", function () {
        $(this).css("visibility", "hidden")
    })
    $(".best-sponsor-content").on("mouseover", function () {
        var hide = "." + $(this).attr("id");
        $(hide).css("visibility", "visible")
    })
    $(".best-sponsor-hide").on("mouseout", function () {
        $(this).css("visibility", "hidden")
    })
    $(".best-support-content").on("mouseover", function () {
        var hide = "." + $(this).attr("id");
        $(hide).css("visibility", "visible")
    })
    $(".best-support-hide").on("mouseout", function () {
        $(this).css("visibility", "hidden")
    })
    $(".best-project-content").on("mouseover", function () {
        var hide = "." + $(this).attr("id");
        $(hide).css("visibility", "visible")
    })
    $(".best-project-hide").on("mouseout", function () {
        $(this).css("visibility", "hidden")
    })
    $(".best-funding-content").on("mouseover", function () {
        var hide = "." + $(this).attr("id");
        $(hide).css("visibility", "visible")
    })
    $(".best-funding-hide").on("mouseout", function () {
        $(this).css("visibility", "hidden")
    })



})