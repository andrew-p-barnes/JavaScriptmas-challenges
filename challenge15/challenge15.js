let previousBtn = document.querySelector(".previous");
let nextBtn = document.querySelector(".next");
let gallery = document.querySelector(".gallery");
let galleryArr = Array.from(gallery.children);
let currentCard = document.querySelector(".current");

previousBtn.addEventListener('click', galleryClickHandler);
nextBtn.addEventListener('click', galleryClickHandler);

function galleryClickHandler(event) {
    let currentCardIndex = galleryArr.indexOf(currentCard);
    let previousCardIndex, nextCardIndex = null;

    if (event.target.classList.contains("previous")) {

        if (currentCardIndex != 0) { // check gallery is not at the start
            previousBtn.style.opacity = 1; // gallery not at start

            previousCardIndex = currentCardIndex - 1;
            currentCard.classList.remove("current");
            galleryArr[previousCardIndex].classList.add("current");
            currentCard = document.querySelector(".current"); 
            
            let transformVal = getTransformVal(previousCardIndex);
            gallery.style.transform = transformVal;
        
            nextBtn.style.opacity = 1; // gallery not at end, apply style on button
        }
        if (previousCardIndex === 0) { // if galary now at start, apply style on button
            previousBtn.style.opacity = 0.3;
        }
    }
    else if (event.target.classList.contains("next")) {
        
        if (currentCardIndex < (galleryArr.length - 1)) { // check gallery is not at the end
            nextBtn.style.opacity = 1; // gallery not at end

            nextCardIndex = currentCardIndex + 1;
            currentCard.classList.remove("current");
            galleryArr[nextCardIndex].classList.add("current");
            currentCard = document.querySelector(".current"); 

            let transformVal = getTransformVal(nextCardIndex);
            gallery.style.transform = transformVal;

            previousBtn.style.opacity = 1; // gallery not at start, apply style on button
        }
        if (nextCardIndex === (galleryArr.length - 1)) { // if galary now at end, apply style on button
            nextBtn.style.opacity = 0.3;
        }
    }
}

function getTransformVal(currentVal) {
    let transformVal = currentVal * -220;
    return `translateX(${transformVal}px`;
}