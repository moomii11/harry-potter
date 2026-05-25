function showHouse(house) {

    const allG = document.getElementById("all-g");
    const allS = document.getElementById("all-s");

    if (house === "all") {
        allG.style.display = "flex";
        allS.style.display = "flex";
    }

    else if (house === "gryffindor") {
        allG.style.display = "flex";
        allS.style.display = "none";
    }

    else if (house === "slytherin") {
        allG.style.display = "none";
        allS.style.display = "flex";
    }
}