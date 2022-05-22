document.getElementById("button").addEventListener("click", function() {
    document.title = "Rick Rolled 🤣"
    document.body.style.backgroundImage = "url(/files/rickroll.gif)"
    document.body.style.backgroundSize = "200px 250px"
    document.querySelector(".all").style.display = "none"
    document.querySelector(".greet").style.display = "none"
    var song = document.getElementById("song")
    song.volume = 1
    song.play()
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

document.onkeydown = function (e){
    if(event.keyCode == 123){
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
        return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == "U".charCodeAt(0)) {
        return false;
    }
};