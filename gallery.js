function upDate(previewPic) {
    console.log("Event triggered: onmouseover");
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);

    var displayBox = document.getElementById("image");

    displayBox.innerHTML = previewPic.alt;

    displayBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    var displayBox = document.getElementById("image");

    displayBox.style.backgroundImage = "url('')";

    displayBox.innerHTML = "Hover over an image below to display here.";
}