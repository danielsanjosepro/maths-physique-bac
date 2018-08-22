function changeIconEmail() {
    var icon = document.getElementById("iconEmail").className;
    if (icon == "far fa-envelope") {
        document.getElementById("iconEmail").className = "far fa-envelope-open";
    } else if (icon == "far fa-envelope-open") {
        document.getElementById("iconEmail").className = "far fa-envelope";
    }
}