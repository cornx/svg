document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var fajl = "img/plodine.svg";
    // klikni za prikaz  
    var start = function() {
        document.getElementById("pleter").remove();
        new Vivus('plodine', {
            file: fajl,
            duration: 200,
        }, false);
        new Vivus('ime', {
            file: "img/ime.svg",
            duration: 50,
        }, false);
    };

    // klikni za prikaz apartmana
    var apt = function() {
        document.getElementById("pleter").remove();
        new Vivus('apt', {
            file: "img/apt_proboj.svg",
            duration: 200,
            type: "oneByOne"
        });
    };
    new Vivus('pleter', {
        file: "img/pleter.svg",
        duration: 5000,
    }, false);

});