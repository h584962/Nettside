window.onload = function() {
    document.getElementById("vis1").addEventListener("click", function(event) {
        let dom = document.getElementById("pdf1");
        if(dom.style.display == "inline") {
            dom.style.display = "none";
            document.getElementById("vis1").innerHTML = "Vis prosjektplan";
        } else {
            dom.style.display = "inline";
            document.getElementById("vis1").innerHTML = "Skjul prosjektplan";
        }
    });
    document.getElementById("vis2").addEventListener("click", function(event) {
        let dom = document.getElementById("pdf2");
        if(dom.style.display == "inline") {
            dom.style.display = "none";
            document.getElementById("vis2").innerHTML = "Vis akademisk versjon";
        } else {
            dom.style.display = "inline";
            document.getElementById("vis2").innerHTML = "Skjul akademisk versjon";
        }
    });
    document.getElementById("vis3").addEventListener("click", function(event) {
        let dom = document.getElementById("pdf3");
        if(dom.style.display == "inline") {
            dom.style.display = "none";
            document.getElementById("vis3").innerHTML = "Vis Matlab prosjekt";
        } else {
            dom.style.display = "inline";
            document.getElementById("vis3").innerHTML = "Skjul Matlab prosjekt";
        }
    });
};