window.onload = function () {
    // Getting useful elements for slider
    let next = document.getElementById("next");
    let previews = document.getElementById("previews");
    let slides = document.querySelectorAll("#slides .slide");
    //

    // Getting useful elements for slider1
    let slides1 = document.getElementById("slides1");
    let items = document.querySelectorAll("#slides1 .slide1");
    //

    // Getting useful elements for navbar button
    let collaps = document.getElementById("collaps");
    let x = document.getElementById("myTopnav");
    //


    // Functions for slider
    // Showing first slide items on load
    let currentSlide1 = 0;
    let currentSlide2 = 1;
    slides[currentSlide1].className = "show";
    slides[currentSlide2].className = "show";
    //

    
    function nextSlide() {
        goToSlide(currentSlide1 + 1, currentSlide2 + 1);
    };

    function previewsSlide() {
        goToSlide(currentSlide1 - 1, currentSlide2 - 1);
    };

    function goToSlide(n1, n2) {
        slides[currentSlide1].className = "hide"
        slides[currentSlide2].className = "hide"
        currentSlide1 = (n1 + slides.length) % slides.length;
        currentSlide2 = (n2 + slides.length) % slides.length;
        currentSlide1 > 0 ? previews.className = "show1" : previews.className = "hide1";
        currentSlide2 == slides.length - 1 ? next.className = "hide1" : next.className = "show1";
        slides[currentSlide1].className = "show";
        slides[currentSlide2].className = "show";
    };
    //
    //


    // Function for slider1
    let index = 0;
    function show1() {
        index = index + 1;
        index = Math.min(Math.max(index, 0), items.length - 1);
        let width = items[index - 1].offsetWidth;
        if (index == items.length - 1) {
            slides1.scrollLeft -= width * (items.length - 1);
            index = 0;
        } else {
            slides1.scrollLeft += width;
        };
    };
    //


    // Function for navbar
    function collapsing() {
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        };
    };
    //


    // Click event for navbar
    collaps.onclick = function () {
        collapsing();
    };
    //


    // Click events for slider
    next.onclick = function () {
        nextSlide();
    };

    previews.onclick = function () {
        previewsSlide();
    };
    //

    // Defining slides changing interval
    setInterval(nextSlide, 3000);
    setInterval(show1, 3000);
    //

};