window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = handleButtonClick;

    var loc = window.location.href;
    var HTMLvalidLinkStr = 'http://validator.w3.org/check?uri=' + loc;
    var CSSvalidLinkStr = 'http://jigsaw.w3.org/css-validator/validator?uri=' + loc + '?profile=css3';
    document.getElementById("vLink1").setAttribute("href", HTMLvalidLinkStr);
    document.getElementById("vLink2").setAttribute("href", CSSvalidLinkStr);
    loadPlaylist();
}

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    var songName = textInput.value;
    var li = document.createElement("li");
    li.innerHTML = songName;
    if (songName == "flower") {
        var audio =  new Audio("media/flower.mp3");
        audio.play();
    }
    if(songName = "emergency") {
        var audio = new Audio("media/emergencymeeting.mp3");
        audio.play();
    }
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
    save(songName);
}

