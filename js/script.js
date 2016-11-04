document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var aptBtn = document.getElementById("apartmani"),
        plodineBtn = document.getElementById("plodine"),
        pleterBtn = document.getElementById("pleter"),
        danijelBtn = document.getElementById("danijel"),
        labirintBtn = document.getElementById("labirint"),
        labirintBtnRjesenje = document.getElementById("labirint-rjesenje"),
        main = document.querySelector("#main");

    // klikni za prikaz  
    pleterBtn.addEventListener("click", function() {
        //main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            if (main.classList == "plodine") {
                main.classList = "";
            }
        };
        new Vivus(main, {
            file: "img/pleter.svg",
            duration: 5000,
        }, false);
    });


    plodineBtn.addEventListener("click", function() {
        // main.innerHTML = "";

        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "plodine";
        };

        new Vivus(main, {
            file: "img/plodine.svg",
            duration: 200,
        }, false);
    });

    // klikni za prikaz apartmana
    aptBtn.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "";
        };
        new Vivus(main, {
            file: "img/apt_proboj.svg",
            duration: 200,
            type: "oneByOne"
        });
    });

    danijelBtn.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "";
        };
        new Vivus(main, {
            file: "img/ime.svg",
            duration: 200,
            /*type: "oneByOne"*/
        });
    });
    labirintBtn.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "labirint";
        };
        new Vivus(main, {
            file: "img/labirint.svg",
            duration: 100,
            /*type: "oneByOne"*/
        });
    });
    labirintBtnRjesenje.addEventListener("click", function() {
        // main.innerHTML = "";
        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList = "labirint-rjesenje";
        };
        new Vivus(main, {
            file: "img/labirint-rjesenje.svg",
            duration: 400,
            /*type: "oneByOne"*/
        });
    });
    
var i = document.body.style;

keyboardJS.bind('a', function(e) {i.background = "orange";});
keyboardJS.bind('v', function(e) {i.background = "red";});
keyboardJS.bind('s', function(e) {i.background = "blue";});
keyboardJS.bind('r', function(e) {i.background = "pink";});
keyboardJS.bind('d', function(e) {i.background = "grey";});
keyboardJS.bind('f', function(e) {i.background = "black";});
keyboardJS.bind('g', function(e) {i.background = "green";});
    
    
});

