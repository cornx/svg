document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var aptBtn = document.getElementById("apartmani"),
        prikaziBtn = document.getElementById("pokazi"),
        pleterBtn = document.getElementById("pleter"),
        danijelBtn = document.getElementById("danijel"),
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


    prikaziBtn.addEventListener("click", function() {
        // main.innerHTML = "";

        while (main.firstChild) {
            main.removeChild(main.firstChild);
            main.classList += "plodine";
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
});