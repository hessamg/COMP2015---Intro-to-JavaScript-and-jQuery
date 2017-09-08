onload = function () {

    var changeclass = document.getElementsByTagName("div");
    //changes the font colour of the paragraphs in class"change" to red when mouse over
    for (i = 0; i < changeclass.length; i++) {
        if (changeclass[i].className.indexOf("change") != -1) {
            for (j = 0; j < changeclass[i].getElementsByTagName("p").length; j++) {
                changeclass[i].getElementsByTagName("p")[j].onmouseover = function () {
                    this.style.color = "red";
                }
            }
        }
    }

    //changes the font colour of the paragraphs in class"change" to black when mouse out
    for (i = 0; i < changeclass.length; i++) {
        if (changeclass[i].className.indexOf("change") != -1) {
            for (j = 0; j < changeclass[i].getElementsByTagName("p").length; j++) {
                changeclass[i].getElementsByTagName("p")[j].onmouseout = function () {
                    this.style.color = "black";
                }
            }
        }
    }

    var ptags = document.getElementsByTagName("p");
    // any paragraph on the page gets a black dashed 1px wide border and loses it when toggled.
    for (i = 0; i < ptags.length; i++) {
        ptags[i].onclick = function () {
            if (this.style.border.indexOf("dashed") == -1) {
                this.style.border = "1px dashed black";
            }
            else {
                this.style.border = "";
            }
        }
    }
    var topimgs = document.getElementById("top").getElementsByTagName("img");
    // sets the display style of images of the "top" id to "none" when double clicked
    for (i = 0; i < topimgs.length; i++) {
        topimgs[i].ondblclick = function () {
            this.style.display = "none";
        }
    }

    var mdlimgs = document.getElementById("middle").getElementsByTagName("img");
    // sets the display style of images of the "middle" id to "none" when double clicked
    for (i = 0; i < mdlimgs.length; i++) {
        mdlimgs[i].ondblclick = function () {
            this.style.display = "none";
        }
    }

    // the "bottom" div's links that contain "nhl" in them would not open on click
    for (i = 0; i < document.getElementById("bottom").getElementsByTagName("a").length; i++) {
        if (document.getElementById("bottom").getElementsByTagName("a")[i].href.indexOf("nhl") != -1) {
            document.getElementById("bottom").getElementsByTagName("a")[i].onclick = function () {
                return false;
            }
        }
    }
}