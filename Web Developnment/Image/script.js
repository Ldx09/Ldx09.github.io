function showImage(image, title, description) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = image.src;

    let imageTitle = document.getElementById("imageTitle");
    imageTitle.textContent = title;

    let imageDescription = document.getElementById("imageDescription");
    imageDescription.textContent = description;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}
