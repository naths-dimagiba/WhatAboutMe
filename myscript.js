document.getElementById("button").addEventListener("click", function() {
    document.title = "Rick Rolled 🤣"
    document.body.style.backgroundImage = "url(/files/rickroll.gif)"
    document.body.style.backgroundSize = "200px 250px"
    document.querySelector(".all").style.display = "none"
    document.querySelector(".greet").style.display = "none"
    var song = document.getElementById("song")
    song.volume = 1
    song.play()
})