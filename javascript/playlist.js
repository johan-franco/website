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
    var ul = document.getElementById("playlist");
    ul.appendChild(li);
}

function save(item) {
    var playlistarray = getStorearray("playlist");
    playlistarray.push(item);
    localStorage.setItem("playlist", JSON.stringify(playlistarray));
}
function loadPlaylist() {
    var playlistarray = getSavedSongs();
    var ul = document.getElementById("playlist");
    if (playlistarray != null) {
        for (var i = 0; i < playlistarray.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = playlistarray[i];
            ul.appendChild(li);
        }
    }
}
function getSavedSongs() {
    return getStorearray("playlist");
}
function getStorearray(key) {
    var playlistarray = localStorage.getItem(key);
    if (playlistarray == null || playlistarray == "") {
        playlistarray = new array();
    }
    else {
        playlistarray = JSON.parse(playlistarray);
    }
    return playlistarray;
}
window.onload = init;