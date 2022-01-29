// javascript of responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
})

// javascript for image slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".image-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i)
    })
})


// life in zippy javascript
mainImg = document.getElementById('mainImg');

thumb1 = document.getElementById('thumb1');
thumb1Src = document.getElementById('thumb1').src;
thumb2 = document.getElementById('thumb2');
thumb2Src = document.getElementById('thumb2').src;
thumb3 = document.getElementById('thumb3');
thumb3Src = document.getElementById('thumb3').src;
thumb4 = document.getElementById('thumb4');
thumb4Src = document.getElementById('thumb4').src;
thumb5 = document.getElementById('thumb5');
thumb5Src = document.getElementById('thumb5').src;

thumb1.addEventListener("click", function () {
    mainImg.src = thumb1Src
})
thumb2.addEventListener("click", function () {
    mainImg.src = thumb2Src
})
thumb3.addEventListener("click", function () {
    mainImg.src = thumb3Src
})
thumb4.addEventListener("click", function () {
    mainImg.src = thumb4Src
})
thumb5.addEventListener("click", function () {
    mainImg.src = thumb5Src
})
