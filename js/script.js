 var fajl = "img/plodine.svg";
 new Vivus('pleter', {
     file: "img/pleter.svg",
     duration: 5000,
 }, false);
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
 var apt = function() {
     document.getElementById("pleter").remove();
     new Vivus('apt', {
         file: "img/apt_proboj.svg",
         duration: 200,
         type: "oneByOne"
     });
 };