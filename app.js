var imgFeature = document.querySelector(".img-feature")
var listImage = document.querySelectorAll(".list-image img")
var prevBtn = document.querySelector(".prev")
var nextBtn = document.querySelector(".next")

var currentIndex = 0;


function updateImageByIndex(index) {
    // remove all class
    listImage.forEach(item => {
        item.classList.remove("active")
    })
    // update image
    currentIndex = index;
    imgFeature.src = listImage[index].getAttribute("src")

    // update class 
    listImage[index].classList.add("active")
}

listImage.forEach((imgElement, index) => {
    imgElement.addEventListener("click", e => {
        imgFeature.style.animation = ""

        setTimeout(() => {
            if (currentIndex > index) {
                updateImageByIndex(index)
                imgFeature.style.animation = "slideLeft 1s ease forwards"
            } else {
                updateImageByIndex(index)
                imgFeature.style.animation = "slideRight 1s ease forwards"
            }
        }, 0)
    })
})

prevBtn.addEventListener("click", e => {

    if (currentIndex > 0) {
        currentIndex--
    } else {
        currentIndex = listImage.length - 1
    }
    imgFeature.style.animation = ""
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgFeature.style.animation = "slideLeft 1s ease forwards"
    }, 0)
})

nextBtn.addEventListener("click", e => {
    if (currentIndex < listImage.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    imgFeature.style.animation = ""
    setTimeout(() => {
        updateImageByIndex(currentIndex)
        imgFeature.style.animation = "slideRight 1s ease forwards"
    }, 0)
})

updateImageByIndex(0)